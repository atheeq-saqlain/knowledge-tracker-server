const mongoose = require("mongoose");
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
    required: true,
  },
  //which grade or class is this question for [8th grade, 9th, 10th]
  grade: {
    type: String,
  },
  //which syllabus does has this question [icse, cbse, state ... etc] or exam[jee, neet etc]
  syllabus: {
    //should refer to the syllabus - need to decide on how the data for the syllabus must be stored
  },
  coreConcept: {
    type: Schema.ObjectId,
    ref: "Concept",
  },
  referedConcepts: [
    {
      type: Schema.ObjectId,
      ref: "Concept",
    },
  ],
});

module.exports = mongoose.model("Question", questionSchema);
