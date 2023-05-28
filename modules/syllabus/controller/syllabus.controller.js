const SyllabusService = require('../service/syllabus.service');

exports.create = async function (req, res, next) {
  // add validation for this
  let newSyllabus = await SyllabusService.add(req.body);
  res.status(200).json(newSyllabus);
};

exports.getSyllabus = async function (req, res, next) {
  let syllabus = await SyllabusService.listAllSyllabus();
  res.status(200).json(syllabus);
};

exports.getSyllabusById = async function (req, res, next) {
  let syllabus = await SyllabusService.findSyllabusById(req.params.id);
  res.status(200).json(syllabus);
};

exports.updateSyllabus = async function (req, res, next) {
  try {
    let updatedSyllabus = await SyllabusService.updateSyllabus(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedSyllabus);
  } catch (error) {
    res.status(500).send('error updating');
  }
};

exports.deleteSyllabus = async function (req, res, next) {
  try {
    await SyllabusService.deleteSyllabus(req.params.id);
    res.status(200).send('deleted syllabus');
  } catch (error) {
    res.status(500);
  }
};
