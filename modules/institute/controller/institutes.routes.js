var express = require('express');
var router = express.Router();

const InstitutesController = require('./institutes.controller');
const { isAuthenticated, isAuthorized } = require('../../../middlewares/authentication');

router
  .route('/')
  .get(isAuthenticated, isAuthorized(['admin']), InstitutesController.getInstitutes)
  .post(isAuthenticated, isAuthorized(['admin']), InstitutesController.create);

router
  .route('/:id')
  .get(isAuthenticated, isAuthorized(['admin', 'institute-admin']), InstitutesController.getInstituteById)
  .put(isAuthenticated, isAuthorized(['admin']), InstitutesController.updateInstitute)
  .delete(isAuthenticated, isAuthorized(['admin']), InstitutesController.deleteInstitute);

module.exports = router;
