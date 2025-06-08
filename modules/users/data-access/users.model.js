const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: [
    {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
  ],
  dateOfBirth: {
    type: Date,
  },
  address: {
    formattedAddress: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    pinCode: {
      type: String,
    },
  },
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
      enum: ['admin', 'content-moderator', 'teacher', 'institute-admin', 'student'],
    },
  ],
  student: {
    type: Schema.ObjectId,
    ref: 'Student',
  },
  // institute : for teacher and institute-admmin | make this into separate model
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
