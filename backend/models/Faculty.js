// models/Faculty.js
const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    papers: [{
        title: { type: String, required: true },
        role: { type: String, required: true }
    }]
});

const Faculty = mongoose.model('Faculty', facultySchema);
module.exports = Faculty;
