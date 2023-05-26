// import conceptsModel from './concepts.model';
const conceptsModel = require('./concepts.model');

// mongo data adapter

// creation
exports.addConcept = async function (concept) {
  return await conceptsModel.create(concept);
};

// reading
exports.listAllConcepts = async function () {
  return await conceptsModel.find();
};

exports.findConceptById = async function (id) {
  return await conceptsModel.findById(id);
};

// update
exports.updateConcept = async function (id, updatedConcept) {
  console.log('updating concept : ', id, updatedConcept);
  let cpt = await conceptsModel.findByIdAndUpdate(id, updatedConcept);
  console.log('updated concept : ', cpt);
  return cpt;
};

// delete
exports.deleteConcept = async function (id) {
  return await conceptsModel.findByIdAndDelete(id);
};
