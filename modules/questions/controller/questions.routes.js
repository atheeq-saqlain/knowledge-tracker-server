var express = require('express');
var router = express.Router();

const QuestionsController = require('./questions.controller');
const { isAuthenticated, isAuthorized } = require('../../../middlewares/authentication');

router
  .route('/')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    QuestionsController.getQuestions
  )
  .post(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    QuestionsController.create
  );

router
  .route('/:id')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    QuestionsController.getQuestionById
  )
  .put(isAuthenticated, isAuthorized(['admin', 'content-moderator']), QuestionsController.updateQuestion)
  .delete(isAuthenticated, isAuthorized(['admin', 'content-moderator']), QuestionsController.deleteQuestion);

module.exports = router;
