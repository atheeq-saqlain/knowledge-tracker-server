const subjectModel = require('./subject.model');
const mongoose = require('mongoose');

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
  return await subjectModel.find({ parentSubject: parentId }).populate('concepts');
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

exports.getSubjectHierarchy = async (subjectId) => {
  const subjectHierarchy = await subjectModel.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(subjectId) } },
    {
      $graphLookup: {
        from: 'subjects',
        startWith: '$_id',
        connectFromField: '_id',
        connectToField: 'parentSubject',
        as: 'hierarchy',
        depthField: 'level',
      },
    },
  ]);

  return subjectHierarchy;
};
