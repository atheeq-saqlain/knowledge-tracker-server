// import * as conceptDb from '../data-access/concepts.data';
const conceptDb = require('../data-access/concepts.data');

exports.add = async function (concept) {
  return await conceptDb.addConcept(concept);
};

exports.listAllConcepts = async function () {
  return await conceptDb.listAllConcepts();
};

exports.findConceptById = async function (id) {
  return await conceptDb.findConceptById(id);
};

exports.updateConcept = async function (conceptId, updatedObj) {
  return await conceptDb.updateConcept(conceptId, updatedObj);
};

exports.deleteConcept = async function (conceptId) {
  return await conceptDb.deleteConcept(conceptId);
};
