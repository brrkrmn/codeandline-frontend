const mongoose = require('mongoose')

const noteContentSchema = new mongoose.Schema({
  line: {
    type: Number,
  },
  content: {
    type: String,
    required: true
  },
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note'
  }
})

noteContentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v
  }
})

module.exports = mongoose.model('NoteContent', noteContentSchema)