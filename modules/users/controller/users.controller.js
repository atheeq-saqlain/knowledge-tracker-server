const AuthService = require('../service/users.auth.service');
const UserCrud = require('../service/user.crud.service');

// CRUD controllers
exports.createUser = async function (req, res, next) {
  let user = await UserCrud.createUser(req.body);
  res.status(200).jsonp(user);
};

exports.list = async function (req, res, next) {
  let users = await UserCrud.listUsers();
  res.status(200).jsonp(users);
};
