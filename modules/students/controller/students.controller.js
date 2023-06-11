const StudentService = require('../service/students.service');

exports.create = async function (req, res, next) {
  // add validation for this
  let newStudent = await StudentService.add(req.body);
  // return newStudent;
  res.status(200).json(newStudent);
};

exports.getStudents = async function (req, res, next) {
  let questions = await StudentService.listAllStudents();
  res.status(200).json(questions);
};

exports.getStudentById = async function (req, res, next) {
  let question = await StudentService.findStudentById(req.params.id);
  res.status(200).json(question);
};

exports.updateStudent = async function (req, res, next) {
  try {
    let updatedStudent = await StudentService.updateStudent(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).send('error updating');
  }
};

exports.deleteStudent = async function (req, res, next) {
  try {
    await StudentService.deleteStudent(req.params.id);
    res.status(200).send('deleted question');
  } catch (error) {
    res.status(500);
  }
};
