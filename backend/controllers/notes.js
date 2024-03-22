const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', async (request, response) => {
  const user = request.user
  const userNotes = await Note
    .find({ user: user._id }).populate('user')

  response.json(userNotes)
})

notesRouter.get('/:id', async (request, response) => {
  const note = await Note.findById(request.params.id).populate('user')
  const user = request.user

  if (note.user.id === user.id) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

notesRouter.post('/', async (request, response) => {
  const body = request.body
  const user = request.user

  const note = new Note({
    title: body.title,
    description: body.description,
    folder: body.folder,
    code: body.code,
    entries: body.entries,
    public: body.public,
    user: user._id
  })

  const savedNote = await note.save()
  user.notes = user.notes.concat(savedNote._id)
  await user.save()

  response.status(201).json(savedNote)
})

module.exports = notesRouter