const mongoose = require('mongoose')

const firmProfileSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    ceoMessage: {
      type: String
    },
    // topClients: [{
    //     name: String,
    //     avatar: String
    // }],
    associations: [{
        name : String,
        avatar: String
    }]
  })

  module.exports = mongoose.model('firmProfile', firmProfileSchema)
  