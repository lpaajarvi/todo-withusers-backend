const mongoose = require('mongoose')

//const taskSchema = {
//  title: String,
//  content: String,
// }

//const Task = mongoose.model('Task', taskSchema)

//module.exports = Task

const taskTemplate = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  author_id: {
    type: String,
    required: true,
  },

  // not meant to be visible in UI but it's good thing to have
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('tasktable', taskTemplate)
