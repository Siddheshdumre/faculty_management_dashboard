// routes/faculty.js
const express = require('express');
const Faculty = require('../models/Faculty');

const router = express.Router();

// POST route for registering faculty
router.post('/register-faculty', async (req, res) => {
    const facultyData = req.body;
    const newFaculty = new Faculty(facultyData);
    try {
        await newFaculty.save();
        res.status(201).json({ message: 'Faculty registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// GET route for fetching faculty data
router.get('/faculty-data', async (req, res) => {
    try {
        const faculty = await Faculty.find({});
        res.json(faculty);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;
