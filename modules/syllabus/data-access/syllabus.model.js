const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * The syllabus object is defined as a set of chapters of a particular
 * prescribed subject for a specific class
 */

const SyllabusSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  grade: {
    type: String,
    required: true,
  },
  educationBoard: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  chapters: [
    {
      title: {
        type: String,
      },
      sections: [
        {
          title: String,
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
        },
      ],
    },
  ],
});

module.exports = mongoose.model('Syllabus', SyllabusSchema);
