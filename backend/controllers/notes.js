const notesRouter = require('express').Router()
const Note = require('../models/note')
const { folderExtractor } = require('../utils/middleware')

notesRouter.get('/', async (request, response) => {
  const user = request.user
  const userNotes = await Note
    .find({ user: user._id }).populate('user').populate('folder')

  response.json(userNotes)
})

notesRouter.get('/:id', async (request, response) => {
  const note = await Note.findById(request.params.id).populate('user').populate('folder')
  const user = request.user

  if (note.user.id === user.id) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

notesRouter.post('/', folderExtractor, async (request, response) => {
  const body = request.body
  const user = request.user
  const folder = request.folder

  const note = new Note({
    title: body.title,
    description: body.description,
    folder: body.folder || null,
    code: body.code,
    entries: body.entries,
    public: body.public,
    user: user._id
  })

  const savedNote = await note.save()

  user.notes = user.notes.concat(savedNote._id)
  await user.save()

  if (folder) {
    folder.notes = folder.notes.concat(savedNote._id)
    await folder.save()
  }

  response.status(201).json(savedNote)
})

notesRouter.delete('/:id', async (request, response) => {
  const user = request.user
  const note = await Note.findById(request.params.id).populate('user')

  if (note.user.id !== user.id) {
    return response.status(403).json({ error: 'Unauthorized' })
  }

  await Note.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

notesRouter.put('/:id', folderExtractor, async (request, response) => {
  const body = request.body
  const user = request.user
  const folder = request.folder
  const note = await Note.findById(request.params.id).populate('user')

  if (note.user.id !== user.id) {
    return response.status(403).json({ error: 'Unauthorized' })
  }

  const newNote = {
    title: body.title,
    description: body.description,
    folder: body.folder,
    code: body.code,
    entries: body.entries,
  }

  const updatedNote = await Note.findByIdAndUpdate(request.params.id, newNote, { new: true })

  if (folder) {
    folder.notes = folder.notes.concat(updatedNote._id)
    await folder.save()
  }

  response.json(updatedNote)
})

module.exports = notesRouter