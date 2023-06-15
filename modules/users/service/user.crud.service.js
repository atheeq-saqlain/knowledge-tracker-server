const usersModel = require('../data-access/users.model');

exports.createUser = async function (body) {
  return await usersModel.create(body);
};

exports.listUsers = async function () {
  return await usersModel.find();
};
