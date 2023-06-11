const institutesDB = require('../data-access/institutes.data');

exports.add = async function (institute) {
  return await institutesDB.addInstitute(institute);
};

exports.listAllInstitutes = async function () {
  return await institutesDB.listAllInstitutes();
};

exports.findInstituteById = async function (id) {
  return await institutesDB.findInstituteById(id);
};

exports.updateInstitute = async function (instituteId, updatedObj) {
  return await institutesDB.updateInstitute(instituteId, updatedObj);
};

exports.deleteInstitute = async function (instituteId) {
  return await institutesDB.deleteInstitute(instituteId);
};
