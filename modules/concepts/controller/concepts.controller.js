// import * as ConceptService from '../service/concepts.service';
const ConceptService = require('../service/concepts.service');

exports.create = async function (req, res, next) {
  // add validation for this
  let newConcept = await ConceptService.add(req.body);
  // return newConcept;
  res.status(200).json(newConcept);
};

exports.getConcepts = async function (req, res, next) {
  let concepts = await ConceptService.listAllConcepts();
  res.status(200).json(concepts);
};

exports.getConceptById = async function (req, res, next) {
  let concept = await ConceptService.findConceptById(req.params.id);
  res.status(200).json(concept);
};

exports.updateConcept = async function (req, res, next) {
  try {
    console.log('rq body : ', req.body);
    let updatedConcept = await ConceptService.updateConcept(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedConcept);
  } catch (error) {
    res.status(500).send('error updating');
  }
};

exports.deleteConcept = async function (req, res, next) {
  try {
    await ConceptService.deleteConcept(req.params.id);
    res.status(200).send('deleted concept');
  } catch (error) {
    res.status(500);
  }
};
