const InstituteService = require('../service/institutes.service');

exports.create = async function (req, res, next) {
  // add validation for this
  let newInstitute = await InstituteService.add(req.body);
  // return newInstitute;
  res.status(200).json(newInstitute);
};

exports.getInstitutes = async function (req, res, next) {
  let questions = await InstituteService.listAllInstitutes();
  res.status(200).json(questions);
};

exports.getInstituteById = async function (req, res, next) {
  let question = await InstituteService.findInstituteById(req.params.id);
  res.status(200).json(question);
};

exports.updateInstitute = async function (req, res, next) {
  try {
    let updatedInstitute = await InstituteService.updateInstitute(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedInstitute);
  } catch (error) {
    res.status(500).send('error updating');
  }
};

exports.deleteInstitute = async function (req, res, next) {
  try {
    await InstituteService.deleteInstitute(req.params.id);
    res.status(200).send('deleted question');
  } catch (error) {
    res.status(500);
  }
};
