const usersModel = require('./users.model');

exports.createUser = async function (body) {
  return await usersModel.create(body);
};

exports.listUsers = async function () {
  return await usersModel.find();
};

exports.findByUserName = async function (username) {
  return await usersModel.findOne({ userName: username });
};

exports.findByUserId = async function (id) {
  return await usersModel.findById(id);
};

exports.updateUser = async function (id, update) {
  return await usersModel.findByIdAndUpdate(id, update, { new: true });
};

exports.deleteUser = async function (id) {
  return await usersModel.findByIdAndDelete(id);
};
