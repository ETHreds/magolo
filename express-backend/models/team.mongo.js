const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  biography: {
    type: String
  },
  profilePicture: {
    type: String
  },
  role: {
    type: String,
    required: true,
    enum: ['Attorney', 'Clerk', 'LawPupil', 'ClientService']
  }
});

module.exports = mongoose.model('Team', teamSchema);
