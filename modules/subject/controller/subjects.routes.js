var express = require('express');
var router = express.Router();
const SubjectsController = require('./subjects.controller');
const { isAuthenticated, isAuthorized } = require('../../../middlewares/authentication');

router
  .route('/')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    SubjectsController.listSubjects
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

router
  .route('/search/:searchString')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    SubjectsController.searchSubjects
  );

router
  .route('/children/:parentId')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    SubjectsController.getSubjectsByParent
  );

module.exports = router;
