const studentsModel = require('./students.model');

// creation
exports.addStudent = async function (student) {
  return await studentsModel.create(student);
};

// reading
exports.listAllStudents = async function () {
  return await studentsModel.find();
};

exports.findStudentById = async function (id) {
  return await studentsModel.findById(id);
};

// update
exports.updateStudent = async function (id, updatedStudent) {
  let student = await studentsModel.findByIdAndUpdate(id, updatedStudent, {
    new: true,
  });
  return student;
};

// delete
exports.deleteStudent = async function (id) {
  return await studentsModel.findByIdAndDelete(id);
};
