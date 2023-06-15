var express = require('express');
var router = express.Router();
const Auth = require('../service/users.auth.service');
const userController = require('./users.controller');

// authentication routes
router.route('/login').post(Auth.login);
router.route('/logout').delete(Auth.logout);

// crud routes
router.route('/').post(userController.createUser).get(userController.list);

module.exports = router;
