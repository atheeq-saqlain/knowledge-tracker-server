const AuthService = require('../service/users.auth.service');
const UserCrud = require('../service/user.crud.service');

// CRUD controllers
exports.createUser = async function (req, res, next) {
  let user = await UserCrud.createUser(req.body);
  res.status(200).jsonp(user);
};

exports.createAdmin = async function (req, res, next) {
  let user = await UserCrud.createAdminUser();
  res.status(200).jsonp(user);
};

exports.list = async function (req, res, next) {
  let users = await UserCrud.listUsers();
  res.status(200).jsonp(users);
};

exports.getLoggedInUser = async function (req, res, next) {
  if (req.user) {
    res.status(200).jsonp(req.user);
  } else {
    res.status(404).jsonp({ message: 'user not found' });
  }
};

exports.getUserById = async function (req, res, next) {
  let user = await UserCrud.findUserById(req.params.id);
  res.status(200).jsonp(user);
};

exports.updateUser = async function (req, res, next) {
  let updateUser = await UserCrud.updateUser(req.params.id, req.body);
  res.status(200).jsonp(updateUser);
};

exports.deleteUser = async function (req, res, next) {
  await UserCrud.deleteUser(req.params.id);
  res.status(200).jsonp({ message: 'User deleted successfuly' });
};
