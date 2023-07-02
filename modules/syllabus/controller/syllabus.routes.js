var express = require('express');
var router = express.Router();
const SyllabusController = require('./syllabus.controller');
const {
  isAuthenticated,
  isAuthorized,
} = require('../../../middlewares/authentication');

router
  .route('/')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    SyllabusController.getSyllabus
  )
  .post(isAuthenticated, isAuthorized(['admin']), SyllabusController.create);

router
  .route('/:id')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    SyllabusController.getSyllabusById
  )
  .put(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator']),
    SyllabusController.updateSyllabus
  )
  .delete(
    isAuthenticated,
    isAuthorized(['admin']),
    SyllabusController.deleteSyllabus
  );

module.exports = router;
