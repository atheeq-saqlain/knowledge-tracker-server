const institutesModel = require('./institutes.model');

// creation
exports.addInstitute = async function (student) {
  return await institutesModel.create(student);
};

// reading
exports.listAllInstitutes = async function () {
  return await institutesModel.find();
};

exports.findInstituteById = async function (id) {
  return await institutesModel.findById(id);
};

// update
exports.updateInstitute = async function (id, updatedInstitute) {
  let institute = await institutesModel.findByIdAndUpdate(
    id,
    updatedInstitute,
    {
      new: true,
    }
  );
  return institute;
};

// delete
exports.deleteInstitute = async function (id) {
  return await institutesModel.findByIdAndDelete(id);
};
