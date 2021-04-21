const mongoose = require('mongoose')

const signInTemplate = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // not meant to be visible in UI but it will be of help when watching
  // logins in MongoDB Atlas
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('signtable', signInTemplate)

// const User = mongoose.model("signtable", signInTemplate)

//5.13
