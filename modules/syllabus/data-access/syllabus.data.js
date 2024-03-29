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
  return await syllabusModel
    .findById(id)
    .populate('educationBoard')
    .populate('chapters.sections.concepts')
    .populate('chapters.sections.questions');
};

// update
exports.updateSyllabus = async function (id, updatedSyllabus) {
  let cpt = await syllabusModel
    .findByIdAndUpdate(id, updatedSyllabus, {
      new: true,
    })
    .populate('educationBoard')
    .populate('chapters.sections.concepts')
    .populate('chapters.sections.questions');
  return cpt;
};

// delete
exports.deleteSyllabus = async function (id) {
  return await syllabusModel.findByIdAndDelete(id);
};
