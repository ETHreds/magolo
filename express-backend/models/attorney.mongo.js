const mongoose = require('mongoose');

const attorneySchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  expertise: {
    type: [String],
    required: true
  },
  barAdmissions: [
    {
      number: {
        type: String,
        required: true
      },
      year: {
        type: Number,
        required: true
      }
    }
  ],
  biography: {
    type: String,
    required: true
  },
  qualifications: {
    type: String
  },
  topCases: [
    {
      title: {
        type: String,
        required: true
      },
      brief: {
        type: String
      },
      link: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model('Attorney', attorneySchema);
