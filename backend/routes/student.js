const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Save student info
router.post('/save', async (req, res) => {
try {
const student = new Student(req.body);
await student.save();
res.status(201).json({ message: 'Saved successfully', student });
} catch (err) {
res.status(500).json({ message: 'Error saving student', error: err.message });
}
});

// Get student info by PRN (or ID)
router.get('/:prn', async (req, res) => {
try {
const student = await Student.findOne({ prn: req.params.prn });
if (!student) return res.status(404).json({ message: 'Not found' });
res.json(student);
} catch (err) {
res.status(500).json({ message: 'Error retrieving student', error: err.message });
}
});

// POST academic info
router.post('/submit-academic-info', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: 'Academic information saved to database.' });
  } catch (error) {
    res.status(400).json({ error: 'Error saving academic information', details: error.message });
  }
});

module.exports = router;