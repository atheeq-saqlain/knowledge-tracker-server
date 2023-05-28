const syllabusDB = require('../data-access/syllabus.data');

exports.add = async function (syllabus) {
  return await syllabusDB.addSyllabus(syllabus);
};

exports.listAllSyllabus = async function () {
  return await syllabusDB.listAllSyllabus();
};

exports.findSyllabusById = async function (id) {
  return await syllabusDB.findSyllabusById(id);
};

exports.updateSyllabus = async function (syllabusId, updatedObj) {
  return await syllabusDB.updateSyllabus(syllabusId, updatedObj);
};

exports.deleteSyllabus = async function (syllabusId) {
  return await syllabusDB.deleteSyllabus(syllabusId);
};
