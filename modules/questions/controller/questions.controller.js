const QuestionService = require('../service/questions.service');

exports.create = async function (req, res, next) {
  // add validation for this
  let newQuestion = await QuestionService.add(req.body);
  // return newQuestion;
  res.status(200).json(newQuestion);
};

exports.getQuestions = async function (req, res, next) {
  let questions = await QuestionService.listAllQuestions();
  res.status(200).json(questions);
};

exports.getQuestionById = async function (req, res, next) {
  let question = await QuestionService.findQuestionById(req.params.id);
  res.status(200).json(question);
};

exports.updateQuestion = async function (req, res, next) {
  try {
    let updatedQuestion = await QuestionService.updateQuestion(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(500).send('error updating');
  }
};

exports.deleteQuestion = async function (req, res, next) {
  try {
    await QuestionService.deleteQuestion(req.params.id);
    res.status(200).send('deleted question');
  } catch (error) {
    res.status(500);
  }
};
