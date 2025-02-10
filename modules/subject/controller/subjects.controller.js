const SubjectService = require('../service/subjects.service');

exports.listAllSubjects = async function (req, res, next) {
  try {
    let subjects = await SubjectService.listAllSubjects();
    res.status(200).jsonp(subjects);
  } catch (err) {
    next(err);
  }
};

exports.createSubject = async function (req, res, next) {
  try {
    let subject = await SubjectService.createSubject(req.body);
    res.status(201).jsonp(subject);
  } catch (err) {
    next(err);
  }
};

exports.getSubjectById = async function (req, res, next) {
  try {
    let subject = await SubjectService.getSubjectById(req.params.id);
    res.status(200).jsonp(subject);
  } catch (err) {
    next(err);
  }
};

exports.searchSubjects = async function (req, res, next) {
  try {
    console.log('inside search');
    console.log(req.params.searchString);
    let subjects = await SubjectService.searchSubject(req.params.searchString);
    res.status(200).jsonp(subjects);
  } catch (err) {
    next(err);
  }
};

exports.updateSubject = async function (req, res, next) {
  try {
    let subject = await SubjectService.updateSubject(req.params.id, req.body);
    res.status(200).jsonp(subject);
  } catch (err) {
    next(err);
  }
};

exports.deleteSubject = async function (req, res, next) {
  try {
    await SubjectService.deleteSubject(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
