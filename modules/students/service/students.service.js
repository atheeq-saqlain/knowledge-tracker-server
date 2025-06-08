const studentsDB = require('../data-access/students.data');

exports.add = async function (student) {
  return await studentsDB.addStudent(student);
};

exports.listAllStudents = async function () {
  return await studentsDB.listAllStudents();
};

exports.findStudentById = async function (id) {
  return await studentsDB.findStudentById(id);
};

exports.findStudentByUserProfile = async function (user) {
  return await studentsDB.findStudentByUserProfile(user);
};

exports.updateStudent = async function (studentId, updatedObj) {
  return await studentsDB.updateStudent(studentId, updatedObj);
};

exports.deleteStudent = async function (studentId) {
  return await studentsDB.deleteStudent(studentId);
};
