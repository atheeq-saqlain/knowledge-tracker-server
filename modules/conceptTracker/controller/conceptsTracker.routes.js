var express = require('express');
var router = express.Router();
const ConceptTrackerController = require('./conceptTracker.controller');
const { isAuthenticated, isAuthorized } = require('../../../middlewares/authentication');

router
  .route('/')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    ConceptTrackerController.getConceptTrackers
  )
  .post(isAuthenticated, isAuthorized(['admin', 'content-moderator']), ConceptTrackerController.create);

router
  .route('/:id')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    ConceptTrackerController.getConceptTrackerById
  )
  .put(isAuthenticated, isAuthorized(['admin', 'content-moderator']), ConceptTrackerController.updateConceptTracker)
  .delete(isAuthenticated, isAuthorized(['admin', 'content-moderator']), ConceptTrackerController.deleteConceptTracker);

router
  .route('/subject/mastery')
  .post(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    ConceptTrackerController.getSubjectMastery
  );

module.exports = router;
