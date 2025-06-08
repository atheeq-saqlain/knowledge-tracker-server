const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
  },
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
  mobile: {
    type: String,
  },
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
  grade: {
    type: String,
  },
  subjects: [
    {
      type: Schema.ObjectId,
      ref: 'Subject',
    },
  ],
  // courses: [],
  // teachersAssigned: [
  //   {
  //     teacher: {
  //       type: Schema.ObjectId,
  //       ref: 'User',
  //     },
  //     syllabus: {
  //       type: Schema.ObjectId,
  //       ref: 'Syllabus',
  //     },
  //     assignedDate: Date,
  //     institute: {
  //       type: Schema.ObjectId,
  //       ref: 'Institute',
  //     },
  //   },
  // ],
  // syllabus: [
  //   {
  //     type: Schema.ObjectId,
  //     ref: 'Syllabus',
  //   },
  // ],
  // assignments: [{}], // make a seperate collection
  // // exams: [],
  // concepts: [
  //   {
  //     conceptId: {
  //       type: Schema.ObjectId,
  //       ref: 'Concept',
  //     },
  //     //metrics to judge the srength of the concept and other meta data
  //     strength: Number,
  //     lastRevised: Date,
  //     solvedQuestions: [
  //       //array containing the objects of each question
  //       {
  //         type: Schema.ObjectId,
  //         ref: 'Question',
  //       },
  //       // other metrics of performance and other meta data
  //     ],
  //   },
  // ],
  // questionsAttempted: [
  //   {
  //     question: {
  //       type: Schema.ObjectId,
  //       ref: 'Question',
  //     },
  //     score: Number,
  //     maxScore: Number,
  //     dateAttempted: Date,
  //   },
  // ],
});

module.exports = mongoose.model('Student', studentSchema);
