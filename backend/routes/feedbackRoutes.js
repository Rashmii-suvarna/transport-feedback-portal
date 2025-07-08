const express = require('express');
const router = express.Router();
const Feedback = require('../models/FeedbackModel');

// Route to submit new feedback (POST)
router.post('/', async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to get all feedback (GET)
router.get('/', async (req, res) => {
  try {
    const feedbackList = await Feedback.find();
    res.json(feedbackList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to update status (PUT)
// PUT /api/feedback/:id → to update status to "reviewed"
router.put('/:id', async (req, res) => {
  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      { status: 'reviewed' },
      { new: true } // returns the updated document
    );
    res.json(updatedFeedback);
  } catch (err) {
    console.error('Error updating feedback:', err);
    res.status(500).json({ error: 'Failed to update feedback' });
  }
});


module.exports = router;
