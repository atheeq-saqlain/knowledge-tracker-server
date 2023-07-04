const UserData = require('../data-access/user.data');

exports.createAdminUser = async function () {
  let admin = {
    userName: 'admin',
    password: 'admin123',
    roles: ['admin'],
  };
  return await UserData.createUser(admin);
};

exports.createUser = async function (body) {
  return await UserData.createUser(body);
};

exports.listUsers = async function () {
  return await UserData.listUsers();
};

exports.findUserById = async function (id) {
  return await UserData.findByUserId(id);
};

exports.updateUser = async function (id, update) {
  return await UserData.updateUser(id, update);
};

exports.deleteUser = async function (id) {
  return await UserData.deleteUser(id);
};
