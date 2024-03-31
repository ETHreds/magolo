const mongoose = require('mongoose');

const practiceAreaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  servicesOffered: {
    type: [String]
  }
});

module.exports = mongoose.model('PracticeArea', practiceAreaSchema);
