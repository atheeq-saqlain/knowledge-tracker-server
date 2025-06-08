// Import the concept model
const ConceptTracker = require('./conceptTracker.model');

// Create a new concept
exports.addConcept = async function (concept) {
  return await ConceptTracker.create(concept);
};

// Get all concepts trackers
exports.listConceptTrackers = async function (query) {
  return await ConceptTracker.find(query);
};

// Get a concept by ID
exports.getConceptTrackerById = async function (id) {
  return await ConceptTracker.findById(id);
};

exports.getTrackerByConceptId = async function (conceptId, studentId) {
  return await ConceptTracker.findOne({ concept: conceptId, student: studentId });
};

// Update a concept
exports.updateConceptTracker = async function (id, updatedConcept) {
  const options = { new: true };
  return await ConceptTracker.findByIdAndUpdate(id, updatedConcept, options);
};

// Delete a concept
exports.deleteConceptTracker = async function (id) {
  return await ConceptTracker.findByIdAndDelete(id);
};
