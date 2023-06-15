const usersModel = require('./users.model');

exports.findByUserName = async function (username) {
  return await usersModel.findOne({ userName: username });
};
