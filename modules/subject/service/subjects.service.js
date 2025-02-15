const SubjectData = require('../data-access/subject.data');

exports.listAllSubjects = async function () {
  return await SubjectData.listAllSubjects();
};

exports.listRootSubjects = async function () {
  return await SubjectData.listRootSubjects();
};

exports.createSubject = async function (subject) {
  return await SubjectData.createSubject(subject);
};

exports.getSubjectById = async function (id) {
  return await SubjectData.getSubjectById(id);
};

exports.getSubjectsByParent = async function (parentId) {
  return await SubjectData.getSubjectsByParent(parentId);
};

exports.searchSubject = async function (searchText) {
  return await SubjectData.searchSubjects(searchText);
};

exports.updateSubject = async function (id, update) {
  return await SubjectData.updateSubject(id, update);
};

exports.deleteSubject = async function (id) {
  return await SubjectData.deleteSubject(id);
};
