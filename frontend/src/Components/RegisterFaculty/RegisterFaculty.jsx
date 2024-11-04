import React, { useState } from 'react';
import './RegisterFaculty.css';
import axios from 'axios';

const RegisterFaculty = () => {
  const [numPapers, setNumPapers] = useState(0);
  const [papers, setPapers] = useState([]);

  const handleNumPapersChange = (e) => {
    const number = parseInt(e.target.value) || 0; // Ensure it's a valid number
    setNumPapers(number);
    setPapers(Array.from({ length: number }, () => ({ title: '', role: '' })));
  };

  const handlePaperChange = (index, field, value) => {
    const newPapers = papers.map((paper, i) =>
      i === index ? { ...paper, [field]: value } : paper
    );
    setPapers(newPapers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      department: e.target.department.value,
      designation: e.target.designation.value,
      gender: e.target.gender.value,
      description: e.target.description.value,
      papers
    };

    if (!data.name || !data.email || !data.phone || !data.department || !data.designation || !data.gender || !data.description) {
      alert('Please fill in all the fields.');
      return;
    }

    for (let paper of papers) {
      if (!paper.title || !paper.role) {
        alert('Please fill in all the research paper details.');
        return;
      }
    }

    try {
      await axios.post('http://localhost:5000/faculty/register-faculty', data);
      alert('Faculty registered successfully');
      setNumPapers(0);
      setPapers([]);
      e.target.reset();
    } catch (error) {
      console.error('Error registering faculty:', error.response ? error.response.data : error.message);
      alert('Error registering faculty: ' + error.message);
    }
  };

  return (
    <div className="register-faculty">
      <h2>Register Faculty</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Phone No.</label>
        <input type="tel" name="phone" required />

        <label>Engineering Department</label>
        <select name="department" required>
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
        <select name="designation" required>
          <option value="">Select Designation</option>
          <option>Professor</option>
          <option>Assistant Professor</option>
          <option>Lab Coordinator</option>
          <option>Academic Advisors</option>
          <option>Registrar Office Staff</option>
          <option>Library Staff</option>
          <option>Counselors</option>
          <option>Placement Cell Staff</option>
          <option>Research Assistants</option>
        </select>

        <label>Gender</label>
        <select name="gender" required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>Description</label>
        <textarea name="description" required></textarea>

        <label>Number of Research Papers</label>
        <input type="number" value={numPapers} onChange={handleNumPapersChange} min="0" required />

        {papers.map((paper, index) => (
          <div key={index}>
            <label>Paper {index + 1} Title</label>
            <input
              type="text"
              value={paper.title}
              onChange={(e) => handlePaperChange(index, 'title', e.target.value)}
              required
            />
            <label>Role</label>
            <select
              value={paper.role}
              onChange={(e) => handlePaperChange(index, 'role', e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option>Author</option>
              <option>Co-Author</option>
            </select>
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterFaculty;
