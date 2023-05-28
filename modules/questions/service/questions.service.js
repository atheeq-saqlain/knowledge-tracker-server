const questionsDB = require('../data-access/questions.data');

exports.add = async function (question) {
  return await questionsDB.addQestion(question);
};

exports.listAllQuestions = async function () {
  return await questionsDB.listAllQuestions();
};

exports.findQuestionById = async function (id) {
  return await questionsDB.findQuestionById(id);
};

exports.updateQuestion = async function (questionId, updatedObj) {
  return await questionsDB.updateQuestion(questionId, updatedObj);
};

exports.deleteQuestion = async function (questionId) {
  return await questionsDB.deleteQuestion(questionId);
};
