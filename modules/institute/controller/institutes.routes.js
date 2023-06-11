var express = require('express');
var router = express.Router();

const InstitutesController = require('./institutes.controller');

router
  .route('/')
  .get(InstitutesController.getInstitutes)
  .post(InstitutesController.create);

router
  .route('/:id')
  .get(InstitutesController.getInstituteById)
  .put(InstitutesController.updateInstitute)
  .delete(InstitutesController.deleteInstitute);

module.exports = router;
