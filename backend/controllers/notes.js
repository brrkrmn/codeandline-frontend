const notesRouter = require('express').Router()
const Note = require('../models/note')
const { folderExtractor } = require('../utils/middleware')
const Folder = require('../models/folder')

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
  const note = await Note.findById(request.params.id).populate('user').populate('folder')

  if (note.user.id !== user.id) {
    return response.status(403).json({ error: 'Unauthorized' })
  }

  await Note.findByIdAndRemove(request.params.id)

  user.notes = user.notes.pull(note.id)
  await user.save()

  if (note.folder) {
    const folder = await Folder.findById(note.folder.id)
    folder.notes = folder.notes.pull(note.id)
    await folder.save()
  }

  response.status(204).end()
})

notesRouter.put('/:id', folderExtractor, async (request, response) => {
  const body = request.body
  const user = request.user
  const newFolder = request.folder

  const note = await Note.findById(request.params.id).populate('user').populate('folder')
  const currentFolder = note.folder ? await Folder.findById(note.folder.id).populate('notes') : null

  if (note.user.id !== user.id) {
    return response.status(403).json({ error: 'Unauthorized' })
  }

  const newNote = {
    title: body.title,
    description: body.description,
    folder: body.folder || null,
    code: body.code,
    entries: body.entries,
  }

  const updatedNote = await Note.findByIdAndUpdate(request.params.id, newNote, { new: true })

  if (newFolder) {
    if (currentFolder && newFolder.id !== currentFolder.id) {
      currentFolder.notes = currentFolder.notes.pull(updatedNote._id)
      await currentFolder.save()

      newFolder.notes = newFolder.notes.concat(updatedNote._id)
      await newFolder.save()
    } else if (!currentFolder) {
      newFolder.notes = newFolder.notes.concat(updatedNote._id)
      await newFolder.save()
    }
  } else {
    if (currentFolder) {
      currentFolder.notes = currentFolder.notes.pull(updatedNote._id)
      await currentFolder.save()
    }
  }

  response.json(updatedNote)
})

module.exports = notesRouter