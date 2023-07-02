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
  roles: [
    {
      type: String,
      enum: ['admin', 'content-moderator', 'teacher', 'institute-admin'],
    },
  ],
  // institute : for teacher and institute-admmin
  institute: {
    type: Schema.ObjectId,
    ref: 'Institute',
  },
  // syllabus taught by the teacher | syllabus assigned to the content moderator
  syllabi: [
    {
      type: Schema.ObjectId,
      ref: 'Syllabus',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
