// import * as ConceptService from '../service/concepts.service';
const ConceptTrackerService = require('../service/conceptTracker.service');

exports.create = async function (req, res, next) {
  try {
    // add validation for this
    let newConcept = await ConceptTrackerService.add(req.body);
    // return newConcept;
    res.status(200).json(newConcept);
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

exports.getConceptTrackers = async function (req, res, next) {
  let concepts = await ConceptTrackerService.listAllConceptTrackers();
  res.status(200).json(concepts);
};

exports.filterConcepts = async function (req, res, next) {
  try {
    let concepts = await ConceptTrackerService.listConceptTrackers(req.body);
    res.status(200).json(concepts);
  } catch (error) {
    next(error);
  }
};

exports.getConceptTrackerById = async function (req, res, next) {
  let concept = await ConceptTrackerService.findConceptTrackerById(req.params.id);
  res.status(200).json(concept);
};

exports.updateConceptTracker = async function (req, res, next) {
  try {
    let updatedConcept = await ConceptTrackerService.updateConceptTracker(req.params.id, req.body);
    res.status(200).json(updatedConcept);
  } catch (error) {
    res.status(500).send('error updating');
  }
};

exports.deleteConceptTracker = async function (req, res, next) {
  try {
    await ConceptTrackerService.deleteConceptTracker(req.params.id);
    res.status(200).send('deleted concept');
  } catch (error) {
    res.status(500);
  }
};

exports.getSubjectMastery = async function (req, res, next) {
  try {
    console.log('getting subject mastery .. ', req.body);

    let studentId = req.body.studentId;
    let subjectId = req.body.subjectId;

    console.log('studentId : ', studentId);
    console.log('subjectId : ', subjectId);
    let subjectMastery = await ConceptTrackerService.getProgress(studentId, subjectId);
    return res.status(200).json(subjectMastery);
  } catch (error) {
    next(error);
  }
};
