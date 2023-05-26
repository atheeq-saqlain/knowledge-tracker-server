var express = require('express');
var router = express.Router();
const ConceptController = require('./concepts.controller');

router
  .route('/')
  .get(ConceptController.getConcepts)
  .post(ConceptController.create);

router
  .route('/:id')
  .get(ConceptController.getConceptById)
  .put(ConceptController.updateConcept)
  .delete(ConceptController.deleteConcept);

module.exports = router;
