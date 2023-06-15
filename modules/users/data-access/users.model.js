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
  teacherProfile: {
    studentList: [
      {
        type: Schema.ObjectId,
        ref: 'User',
      },
    ],
  },
});

module.exports = mongoose.model('User', userSchema);
