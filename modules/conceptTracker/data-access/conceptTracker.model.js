const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConceptTrackerSchema = new Schema(
  {
    concept: {
      type: Schema.ObjectId,
      ref: 'Concept',
    },
    student: {
      type: Schema.ObjectId,
      ref: 'Student',
    },
    masteryLevel: {
      type: Number, // 0 to 5 percent
      required: true,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ConceptTracker', ConceptTrackerSchema);
