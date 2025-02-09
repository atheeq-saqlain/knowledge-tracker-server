var express = require('express');
var router = express.Router();
const SubjectsController = require('./subjects.controller');
const { isAuthenticated, isAuthorized } = require('../../../middlewares/authentication');

router
  .route('/')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    SubjectsController.listAllSubjects
  )
  .post(isAuthenticated, isAuthorized(['admin', 'content-moderator']), SubjectsController.createSubject);

router
  .route('/:id')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    SubjectsController.getSubjectById
  )
  .put(isAuthenticated, isAuthorized(['admin', 'content-moderator']), SubjectsController.updateSubject)
  .delete(isAuthenticated, isAuthorized(['admin']), SubjectsController.deleteSubject);

module.exports = router;
