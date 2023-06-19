const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // add roles
  roles: [
    {
      type: String,
      enum: ['admin', 'teacher', 'institute-admin'],
    },
  ],
  institute: {
    type: Schema.ObjectId,
    ref: 'Institute',
  },
  // syllabus taught by the teacher
  syllabuses: [
    {
      type: Schema.ObjectId,
      ref: 'Syllabus',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
