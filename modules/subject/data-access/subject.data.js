const subjectModel = require('./subject.model');

// creating
exports.createSubject = async function (subject) {
  return await subjectModel.create(subject);
};

// reading
exports.listAllSubjects = async function () {
  return await subjectModel.find();
};

exports.listRootSubjects = async function () {
  return await subjectModel.find({ parentSubject: null });
};

exports.getSubjectById = async function (id) {
  return await subjectModel.findById(id);
};

exports.getSubjectsByParent = async function (parentId) {
  return await subjectModel.find({ parentSubject: parentId });
};

exports.getSubjectByName = async function (name) {
  return await subjectModel.findOne({ name });
};

exports.searchSubjects = async function (searchText) {
  return await subjectModel.find({
    name: { $regex: searchText, $options: 'i' },
  });
};

// updating
exports.updateSubject = async function (id, update) {
  return await subjectModel.findByIdAndUpdate(id, update, { new: true });
};

// deleting
exports.deleteSubject = async function (id) {
  return await subjectModel.findByIdAndRemove(id);
};
