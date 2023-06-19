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
