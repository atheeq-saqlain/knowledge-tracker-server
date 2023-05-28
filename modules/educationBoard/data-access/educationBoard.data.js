const educationBoardModel = require('./educationBoard.model');

// creation
exports.addBoard = async function (board) {
  return await educationBoardModel.create(board);
};

// reading
exports.listAllBoard = async function () {
  return await educationBoardModel.find();
};

exports.findBoardById = async function (id) {
  return await educationBoardModel.findById(id);
};

// update
exports.updateBoard = async function (id, updatedBoard) {
  let board = await educationBoardModel.findByIdAndUpdate(id, updatedBoard, {
    new: true,
  });
  return board;
};

// delete
exports.deleteBoard = async function (id) {
  return await educationBoardModel.findByIdAndDelete(id);
};
