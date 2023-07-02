var express = require('express');
var router = express.Router();
const StudentsController = require('./students.controller');
const { isAuthenticated, isAuthorized } = require('../../../middlewares/authentication');

router
  .route('/')
  .get(isAuthenticated, isAuthorized(['admin']), StudentsController.getStudents)
  .post(isAuthenticated, isAuthorized(['admin', 'institute-admin']), StudentsController.create);

// TODO: Add api to get students by institute
// TODO: Add api to get students by assigned teacher

router
  .route('/:id')
  .get(isAuthenticated, isAuthorized(['admin', 'teacher', 'institute-admin']), StudentsController.getStudentById)
  .put(isAuthenticated, isAuthorized(['admin', 'institute-admin']), StudentsController.updateStudent)
  .delete(isAuthenticated, isAuthorized(['admin', 'institute-admin']), StudentsController.deleteStudent);

module.exports = router;
