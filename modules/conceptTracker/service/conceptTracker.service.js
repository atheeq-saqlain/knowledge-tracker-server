// import * as conceptDb from '../data-access/concepts.data';
const subjectDb = require('../../subject/data-access/subject.data');
const conceptTrackerDb = require('../data-access/conceptsTracker.data');

// CRUD controllers
exports.add = async function (concept) {
  return await conceptTrackerDb.addConcept(concept);
};

exports.listAllConceptTrackers = async function () {
  return await conceptTrackerDb.listConceptTrackers({});
};

exports.findConceptTrackerById = async function (id) {
  return await conceptTrackerDb.getConceptTrackerById(id);
};

exports.listConceptTrackers = async function (query) {
  return await conceptTrackerDb.listConceptTrackers(query);
};

exports.updateConceptTracker = async function (conceptTrackerId, updatedObj) {
  return await conceptTrackerDb.updateConceptTracker(conceptTrackerId, updatedObj);
};

exports.deleteConceptTracker = async function (conceptId) {
  return await conceptTrackerDb.deleteConceptTracker(conceptId);
};

// Progress tracking functionality
exports.getProgress = async function (studentId, subjectId) {
  let subjectsLookup = (await subjectDb.getSubjectHierarchy(subjectId))[0];

  let subjectTree = buildSubjectTree(subjectsLookup);

  await computeMasteryForSubjectTree(subjectTree, studentId);

  return subjectTree;
};

const calculateConceptMasteryForSubject = async function (subject, studentId) {
  let mastery = 0;
  if (!(subject.concepts && subject.concepts.length)) {
    return 0;
  }
  for (let i = 0; i < subject.concepts.length; i++) {
    let conceptTracker = await conceptTrackerDb.getTrackerByConceptId(subject.concepts[i], studentId);
    if (conceptTracker) {
      mastery += conceptTracker.masteryLevel;
    }
  }
  let avgMastery = (mastery / (subject.concepts.length * 5)) * 100;
  return avgMastery;
};

const buildSubjectTree = (subjectsLookup) => {
  let rootSubject = subjectsLookup;
  rootSubject.children = [];
  let hierarchyList = subjectsLookup.hierarchy;
  delete rootSubject.hierarchy;

  function buildTree(rootNode, hierarchyList, level = 0, maxDepth = 5) {
    if (level > maxDepth) {
      return rootNode;
    }

    let children = hierarchyList.filter((node) => node.parentSubject.toString() === rootNode._id.toString());
    if (!children) {
      return rootNode;
    }
    rootNode.children = children;
    rootNode.children.forEach((child) => buildTree(child, hierarchyList, level + 1, maxDepth));
    return rootNode;
  }

  let subjectTree = buildTree(rootSubject, hierarchyList);

  return subjectTree;
};

const computeMasteryForSubjectTree = async (subject, studentId) => {
  let mastery = 0;
  let avgMastery = 0;
  let total = 0;
  if (subject.concepts && subject.concepts.length > 0) {
    total += 1;
    mastery += await calculateConceptMasteryForSubject(subject, studentId);
  }

  for (let i = 0; i < subject.children.length; i++) {
    total += 1;
    mastery += await computeMasteryForSubjectTree(subject.children[i], studentId);
  }
  if (total > 0) {
    avgMastery = mastery / total;
  }
  subject.mastery = avgMastery;
  let res = avgMastery;
  return res || 0;
};
