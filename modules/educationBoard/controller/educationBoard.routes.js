var express = require('express');
var router = express.Router();
const EducationBoardController = require('./educationBoard.controller');

router
  .route('/')
  .get(EducationBoardController.getBoards)
  .post(EducationBoardController.create);

router
  .route('/:id')
  .get(EducationBoardController.getBoardById)
  .put(EducationBoardController.updateBoard)
  .delete(EducationBoardController.deleteBoard);

module.exports = router;
