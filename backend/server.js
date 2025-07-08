const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

// Middleware
app.use(cors());              // Allow cross-origin requests (frontend → backend)
app.use(express.json());      // Parse incoming JSON bodies

// Routes
app.use('/api/feedback', feedbackRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(5000, () => {
    console.log('🚀 Server running on http://localhost:5000');
  });
}).catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
});
