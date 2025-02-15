const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
  },
  description: {
    type: String,
  },
  parentSubject: {
    type: Schema.ObjectId,
    ref: 'Subject',
  },
  concepts: [
    {
      type: Schema.ObjectId,
      ref: 'Concept',
    },
  ],
  questions: [
    {
      type: Schema.ObjectId,
      ref: 'Question',
    },
  ],
});

module.exports = mongoose.model('Subject', SubjectSchema);
