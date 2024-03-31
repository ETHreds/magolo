const mongoose = require('mongoose');

const clientCommsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,

  },
  phoneNumber: {
    type: String,
  },
  message: {
    type: String,
    required: true
  },
  submittedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ClientComms', clientCommsSchema);
