const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConceptSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  subjects: [
    {
      type: Schema.ObjectId,
      ref: 'Subject',
    },
  ],
  preRequisitConcepts: [
    {
      type: Schema.ObjectId,
      ref: 'Concept',
    },
  ],
});

module.exports = mongoose.model('Concept', ConceptSchema);
