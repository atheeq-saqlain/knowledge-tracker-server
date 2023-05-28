const BoardService = require('../service/educationBoard.service');

exports.create = async function (req, res, next) {
  // add validation for this
  let newBoard = await BoardService.add(req.body);
  res.status(200).json(newBoard);
};

exports.getBoards = async function (req, res, next) {
  let boards = await BoardService.listAllBoard();
  res.status(200).json(boards);
};

exports.getBoardById = async function (req, res, next) {
  let board = await BoardService.findBoardById(req.params.id);
  res.status(200).json(board);
};

exports.updateBoard = async function (req, res, next) {
  try {
    let updatedBoard = await BoardService.updateBoard(req.params.id, req.body);
    res.status(200).json(updatedBoard);
  } catch (error) {
    res.status(500).send('error updating');
  }
};

exports.deleteBoard = async function (req, res, next) {
  try {
    await BoardService.deleteBoard(req.params.id);
    res.status(200).send('deleted board');
  } catch (error) {
    res.status(500);
  }
};
