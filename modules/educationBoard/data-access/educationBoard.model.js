const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * The EducationBoard object is defined as a set of chapters of a particular
 * prescribed subject for a specific class
 */

const EducationBoardSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  abbreviation: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
});

module.exports = mongoose.model('EducationBoard', EducationBoardSchema);
