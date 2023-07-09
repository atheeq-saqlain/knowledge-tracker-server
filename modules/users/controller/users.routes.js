var express = require('express');
var router = express.Router();
const Auth = require('../service/users.auth.service');
const userController = require('./users.controller');
const { isAuthenticated, isAuthorized, authorizeAdminKey } = require('../../../middlewares/authentication');

// authentication routes
router.route('/login').post(Auth.login);
router.route('/logout').delete(Auth.logout);

// admin account management
router.route('/admin').post(authorizeAdminKey, userController.createAdmin);

// crud routes
router
  .route('/')
  .post(isAuthenticated, isAuthorized(['admin']), userController.createUser)
  .get(isAuthenticated, isAuthorized(['admin']), userController.list);

router
  .route('/:id')
  .get(isAuthenticated, isAuthorized(['admin']), userController.getUserById)
  .post(isAuthenticated, isAuthorized(['admin']), userController.updateUser)
  .delete(isAuthenticated, isAuthorized(['admin']), userController.deleteUser);

router.route('/check/loggedin').get(isAuthenticated, userController.getLoggedInUser);

module.exports = router;
