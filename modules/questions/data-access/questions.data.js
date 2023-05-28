const questionsModel = require('./questions.model');

// creation
exports.addQestion = async function (question) {
  return await questionsModel.create(question);
};

// reading
exports.listAllQuestions = async function () {
  return await questionsModel.find();
};

exports.findQuestionById = async function (id) {
  return await questionsModel.findById(id);
};

// update
exports.updateQuestion = async function (id, updatedQuestion) {
  let cpt = await questionsModel.findByIdAndUpdate(id, updatedQuestion, {
    new: true,
  });
  return cpt;
};

// delete
exports.deleteQuestion = async function (id) {
  return await questionsModel.findByIdAndDelete(id);
};
