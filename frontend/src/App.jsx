import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import RegisterFaculty from './Components/RegisterFaculty/RegisterFaculty';
import ActivityForm from './Components/ActivityForm/ActivityForm'
import Dashboard from './Components/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><About /></>} />
        <Route path="/register-faculty" element={<RegisterFaculty />} />
        <Route path="/activity-form" element={<ActivityForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
