const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  statement: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
  },
  //type or level of question for the same concept(need to think about this further)
  questionType: {
    type: String,
  },
  syllabus: {
    type: Schema.ObjectId,
    ref: 'Syllabus',
  },
  coreConcept: {
    type: Schema.ObjectId,
    ref: 'Concept',
  },
  referedConcepts: [
    {
      type: Schema.ObjectId,
      ref: 'Concept',
    },
  ],
});

module.exports = mongoose.model('Question', questionSchema);
