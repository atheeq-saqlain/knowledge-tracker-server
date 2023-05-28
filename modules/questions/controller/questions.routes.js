var express = require('express');
var router = express.Router();

const QuestionsController = require('./questions.controller');

router
  .route('/')
  .get(QuestionsController.getQuestions)
  .post(QuestionsController.create);

router
  .route('/:id')
  .get(QuestionsController.getQuestionById)
  .put(QuestionsController.updateQuestion)
  .delete(QuestionsController.deleteQuestion);

module.exports = router;
