const syllabusModel = require('./syllabus.model');

// creation
exports.addSyllabus = async function (syllabus) {
  return await syllabusModel.create(syllabus);
};

// reading
exports.listAllSyllabus = async function () {
  return await syllabusModel.find();
};

exports.findSyllabusById = async function (id) {
  return await syllabusModel.findById(id).populate('educationBoard');
};

// update
exports.updateSyllabus = async function (id, updatedSyllabus) {
  let cpt = await syllabusModel.findByIdAndUpdate(id, updatedSyllabus, {
    new: true,
  });
  return cpt;
};

// delete
exports.deleteSyllabus = async function (id) {
  return await syllabusModel.findByIdAndDelete(id);
};
