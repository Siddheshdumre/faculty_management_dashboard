import React, { useState } from 'react';
import './ActivityForm.css';
import axios from 'axios';

const ActivityForm = () => {
  const [activity, setActivity] = useState({
    name: '',
    department: '',
    designation: '',
    email: '',
    title: '',
    type: '',
    description: '',
    startDate: '',
    endDate: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Custom validation
    const emptyFields = Object.keys(activity).filter(key => !activity[key]);
    if (emptyFields.length > 0) {
      alert(`Please fill in the following fields: ${emptyFields.join(', ')}`);
      return; // Stop the submission if there are empty fields
    }

    try {
      await axios.post('http://localhost:5000/activity/register-activity', activity);
      alert('Activity registered successfully');
      // Optionally reset the form
      setActivity({
        name: '',
        department: '',
        designation: '',
        email: '',
        title: '',
        type: '',
        description: '',
        startDate: '',
        endDate: '',
        duration: ''
      });
    } catch (error) {
      alert('Error registering activity: ' + error.message);
    }
  };

  return (
    <div className="activity-form">
      <h2>Register Activity</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={activity.name} onChange={handleChange} required />

        <label>Department</label>
        <select name="department" value={activity.department} onChange={handleChange} required>
          <option value="">Select Department</option>
          <option>Civil</option>
          <option>Computer Science</option>
          <option>Mechanical</option>
          <option>Electrical</option>
          <option>Chemical</option>
          <option>Aerospace</option>
          <option>Biomedical</option>
          <option>Environmental</option>
          <option>Petroleum</option>
          <option>Industrial</option>
        </select>

        <label>Designation</label>
        <select name="designation" value={activity.designation} onChange={handleChange} required>
          <option value="">Select Designation</option>
          <option>Professor</option>
          <option>Assistant Professor</option>
          <option>Research Assistant</option>
          <option>Student</option>
        </select>

        <label>Email</label>
        <input type="email" name="email" value={activity.email} onChange={handleChange} required />

        <label>Activity Title</label>
        <input type="text" name="title" value={activity.title} onChange={handleChange} required />

        <label>Activity Type</label>
        <select name="type" value={activity.type} onChange={handleChange} required>
          <option value="">Select Activity Type</option>
          <option>Research Project</option>
          <option>Conference Presentation</option>
          <option>Workshop Conducted</option>
          <option>Seminar Attended</option>
          <option>Guest Lecture</option>
          <option>Publication</option>
        </select>

        <label>Description</label>
        <textarea name="description" value={activity.description} onChange={handleChange} required></textarea>

        <label>Start Date</label>
        <input type="date" name="startDate" value={activity.startDate} onChange={handleChange} required />

        <label>End Date</label>
        <input type="date" name="endDate" value={activity.endDate} onChange={handleChange} required />

        <label>Duration</label>
        <input type="text" name="duration" value={activity.duration} onChange={handleChange} placeholder="Total hours or days" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ActivityForm;
