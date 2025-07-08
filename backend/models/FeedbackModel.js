const mongoose = require('mongoose');

// Define the schema for feedback
const feedbackSchema = new mongoose.Schema({
  transportType: {
    type: String,
    enum: ['bus', 'train', 'metro'],
    required: true
  },
  routeNumber: {
    type: String,
    required: true
  },
  feedbackText: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['new', 'reviewed'],
    default: 'new'
  }
});

// Create a model from the schema and export it
const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
