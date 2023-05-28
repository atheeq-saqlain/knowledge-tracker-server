const boardDB = require('../data-access/educationBoard.data');

exports.add = async function (board) {
  return await boardDB.addBoard(board);
};

exports.listAllBoard = async function () {
  return await boardDB.listAllBoard();
};

exports.findBoardById = async function (id) {
  return await boardDB.findBoardById(id);
};

exports.updateBoard = async function (id, updatedObj) {
  return await boardDB.updateBoard(id, updatedObj);
};

exports.deleteBoard = async function (id) {
  return await boardDB.deleteBoard(id);
};
