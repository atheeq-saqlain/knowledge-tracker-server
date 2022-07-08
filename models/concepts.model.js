const mongoose = require("mongoose");
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
  questions: [
    {
      type: Schema.ObjectId,
      ref: "Question",
    },
  ],
  preRequisitConcepts: [
    {
      type: Schema.ObjectId,
      ref: "Concept",
    },
  ],
});

module.exports = mongoose.model("Concept", ConceptSchema);
