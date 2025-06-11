const StudentService = require('../service/students.service');
const UserService = require('../../users/service/user.crud.service');
const ConceptTrackerService = require('../../conceptTracker/service/conceptTracker.service');

exports.create = async function (req, res, next) {
  // add validation for this
  let newStudent = await StudentService.add(req.body);
  // return newStudent;
  res.status(200).json(newStudent);
};

exports.getStudentByUserProfile = async function (req, res, next) {
  try {
    let student = await StudentService.findStudentByUserProfile(req.params.userId);
    let progressPromises = [];
    student.subjects.forEach((subjectId) => {
      progressPromises.push(ConceptTrackerService.getProgress(student._id, subjectId));
    });

    let studentProgress = await Promise.all(
      student.subjects.map(async (subject) => {
        return await ConceptTrackerService.getProgress(student._id, subject);
      })
    );
    return res.status(200).json({ studentDetails: student, studentProgress: studentProgress });
  } catch (error) {
    return next(error);
  }
};

exports.createStudentFromUser = async function (req, res, next) {
  try {
    let user = await UserService.findUserById(req.params.userId || req.user._id);
    let existingStudent = await StudentService.findStudentByUserProfile(user._id);
    if (existingStudent) {
      user.student = existingStudent._id;
      await user.save();
      return res.status(301).json(existingStudent);
    }
    if (user) {
      let studentDetails = {
        user: user._id,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        dateOfBirth: user.dateOfBirth,
        address: user.address,
      };
      let newStudent = await StudentService.add(studentDetails);
      user.student = newStudent._id;
      await user.save();
      return res.status(200).json(newStudent);
    }
  } catch (error) {
    return res.status(500).send(error);
  }
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
    let updatedStudent = await StudentService.updateStudent(req.params.id, req.body);
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
