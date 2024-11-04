const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: String, required: true },
});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
