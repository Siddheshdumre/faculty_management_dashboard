const express = require('express');
const Activity = require('../models/Activity');

const router = express.Router();

// POST route for registering activity
router.post('/register-activity', async (req, res) => {
    const activityData = req.body;
    const newActivity = new Activity(activityData);
    try {
        await newActivity.save();
        res.status(201).json({ message: 'Activity registered successfully' });
    } catch (error) {
        console.error('Error saving activity:', error);
        res.status(500).json({ error: error.message });
    }
});

// GET route for fetching all activities
router.get('/activity-data', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.json(activities);
    } catch (error) {
        console.error('Error fetching activities:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
