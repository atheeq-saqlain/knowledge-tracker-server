var express = require('express');
var router = express.Router();
const SyllabusController = require('./syllabus.controller');

router
  .route('/')
  .get(SyllabusController.getSyllabus)
  .post(SyllabusController.create);

router
  .route('/:id')
  .get(SyllabusController.getSyllabusById)
  .put(SyllabusController.updateSyllabus)
  .delete(SyllabusController.deleteSyllabus);

module.exports = router;
