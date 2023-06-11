var express = require('express');
var router = express.Router();

const StudentsController = require('./students.controller');

router
  .route('/')
  .get(StudentsController.getStudents)
  .post(StudentsController.create);

router
  .route('/:id')
  .get(StudentsController.getStudentById)
  .put(StudentsController.updateStudent)
  .delete(StudentsController.deleteStudent);

module.exports = router;
