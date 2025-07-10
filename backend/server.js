const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/student');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve HTML, CSS, JS files
app.use(express.static(path.join(__dirname, '../HTML_CSS_System')));
app.use(express.static('public'));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/student', studentRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000');
  });
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});
