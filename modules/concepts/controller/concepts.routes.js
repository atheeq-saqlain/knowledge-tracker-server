var express = require('express');
var router = express.Router();
const ConceptController = require('./concepts.controller');
const { isAuthenticated, isAuthorized } = require('../../../middlewares/authentication');

router
  .route('/')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    ConceptController.getConcepts
  )
  .post(isAuthenticated, isAuthorized(['admin', 'content-moderator']), ConceptController.create);

router
  .route('/:id')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    ConceptController.getConceptById
  )
  .put(isAuthenticated, isAuthorized(['admin', 'content-moderator']), ConceptController.updateConcept)
  .delete(isAuthenticated, isAuthorized(['admin', 'content-moderator']), ConceptController.deleteConcept);

router
  .route('/search/:searchString')
  .get(
    isAuthenticated,
    isAuthorized(['admin', 'content-moderator', 'teacher', 'institute-admin']),
    ConceptController.searchConcept
  );

module.exports = router;
