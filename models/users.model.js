const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  studentProfile: {
    currentGrade: {
      type: String,
    },
    teachers: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
    syllabus: {},
    assgnments: [{}],
    exams: [],
    concepts: [
      {
        conceptId: {
          type: Schema.ObjectId,
          ref: "Concept",
        },
        //metrics to judge the srength of the concept and other meta data
      },
    ],
    solvedQuestions: [
      //array containing the objects of each question
      {
        questionId: {
          type: Schema.ObjectId,
          ref: "Question",
        },
        // other metrics of performance and other meta data
      },
    ],
  },
  teacherProfile: {
    studentList: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
  },
});

module.exports = mongoose.model("User", userSchema);
