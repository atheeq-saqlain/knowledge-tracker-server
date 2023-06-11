const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instituteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  admin: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  teachers: [
    {
      type: Schema.ObjectId,
      ref: 'User',
    },
  ],
});

module.exports = mongoose.model('Institute', instituteSchema);
