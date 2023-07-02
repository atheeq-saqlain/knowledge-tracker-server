var express = require('express');
var router = express.Router();
const Auth = require('../service/users.auth.service');
const userController = require('./users.controller');
const {
  isAuthenticated,
  isAuthorized,
  authorizeAdminKey,
} = require('../../../middlewares/authentication');

// authentication routes
router.route('/login').post(Auth.login);
router.route('/logout').delete(Auth.logout);

// admin account management
router.route('/admin').post(authorizeAdminKey, userController.createAdmin);

// crud routes
router
  .route('/')
  .post(userController.createUser)
  .get(
    isAuthenticated,
    isAuthorized(['teacher', 'admin']),
    userController.list
  );

router.route('/loggedin').get(isAuthenticated, userController.getLoggedInUser);

module.exports = router;
