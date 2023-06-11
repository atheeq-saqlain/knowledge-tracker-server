const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
  },
  institutes: [
    {
      type: Schema.ObjectId,
      ref: 'Institute',
    },
  ],
  teachers: [
    {
      type: Schema.ObjectId,
      ref: 'User',
    },
  ],
  syllabus: {
    type: Schema.ObjectId,
    ref: 'Syllabus',
  },
  assignments: [{}], // make a seperate collection
  // exams: [],
  concepts: [
    {
      conceptId: {
        type: Schema.ObjectId,
        ref: 'Concept',
      },
      //metrics to judge the srength of the concept and other meta data
      strength: Number,
      lastRevised: Date,
      solvedQuestions: [
        //array containing the objects of each question
        {
          type: Schema.ObjectId,
          ref: 'Question',
        },
        // other metrics of performance and other meta data
      ],
    },
  ],
});

module.exports = mongoose.model('Student', studentSchema);
