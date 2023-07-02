var express = require('express');
var router = express.Router();
const EducationBoardController = require('./educationBoard.controller');
const { isAuthenticated, isAuthorized } = require('../../../middlewares/authentication');

router
  .route('/')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    EducationBoardController.getBoards
  )
  .post(isAuthenticated, isAuthorized(['admin']), EducationBoardController.create);

router
  .route('/:id')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    EducationBoardController.getBoardById
  )
  .put(isAuthenticated, isAuthorized(['admin']), EducationBoardController.updateBoard)
  .delete(isAuthenticated, isAuthorized(['admin']), EducationBoardController.deleteBoard);

module.exports = router;
