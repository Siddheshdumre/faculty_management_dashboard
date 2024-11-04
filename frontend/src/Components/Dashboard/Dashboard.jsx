import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [facultyError, setFacultyError] = useState(null);
  const [activityError, setActivityError] = useState(null);

  useEffect(() => {
    // Fetch faculty data from the backend
    axios
      .get('http://localhost:5000/faculty/faculty-data')
      .then((response) => {
        console.log('Faculty Data:', response.data); // Log faculty data
        setFacultyData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching faculty data:', error); // Log error
        setFacultyError(error.message); // Set error message state
      });

    // Fetch activity data from the backend
    axios
      .get('http://localhost:5000/activity/activity-data')
      .then((response) => {
        console.log('Activity Data:', response.data); // Log activity data
        setActivityData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching activity data:', error); // Log error
        setActivityError(error.message); // Set error message state
      });
  }, []);

  // Helper function to process data for the charts
  const processData = (data, field) => {
    const dataMap = {};
    data.forEach((item) => {
      dataMap[item[field]] = (dataMap[item[field]] || 0) + 1;
    });
    return Object.keys(dataMap).map((key) => ({
      name: key,
      value: dataMap[key],
    }));
  };

  // Processed data for each chart
  const designationData = processData(facultyData, 'designation');
  const departmentData = processData(facultyData, 'department');
  const genderData = processData(facultyData, 'gender');

  // Processed data for activity charts
  const activityTypeData = processData(activityData, 'type');
  const activityDepartmentData = processData(activityData, 'department');
  const activityDesignationData = processData(activityData, 'designation');

  const colors = [
    '#8884d8',
    '#82ca9d',
    '#ffc658',
    '#ff7f50',
    '#87cefa',
    '#daa520',
    '#32cd32',
    '#ba55d3',
    '#ff69b4',
    '#cd5c5c',
    '#ffa07a',
    '#20b2aa',
    '#778899',
    '#b0c4de',
    '#ff6347',
    '#4682b4',
    '#d2691e',
    '#00fa9a',
    '#e9967a',
    '#8a2be2',
  ];

  return (
    <div className="dashboard">
      <h2>Faculty Dashboard</h2>

      {/* Error handling for faculty data */}
      {facultyError && <p className="error">Error fetching faculty data: {facultyError}</p>}

      <div className="chart-container">
        {/* Pie Chart for Designation */}
        <div>
          <h3>Designation Distribution</h3>
          <ResponsiveContainer width={400} height={400}>
            <PieChart>
              <Pie
                data={designationData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {designationData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart for Department */}
        <div>
          <h3>Department Distribution</h3>
          <ResponsiveContainer width={400} height={400}>
            <PieChart>
              <Pie
                data={departmentData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {departmentData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart for Gender */}
        <div>
          <h3>Gender Distribution</h3>
          <ResponsiveContainer width={400} height={400}>
            <BarChart data={genderData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2>Activity Dashboard</h2>

      {/* Error handling for activity data */}
      {activityError && <p className="error">Error fetching activity data: {activityError}</p>}

      <div className="chart-container">
        {/* Pie Chart for Activity Type */}
        <div>
          <h3>Activity Type Distribution</h3>
          <ResponsiveContainer width={400} height={400}>
            <PieChart>
              <Pie
                data={activityTypeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {activityTypeData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart for Activity Department */}
        <div>
          <h3>Activity Department Distribution</h3>
          <ResponsiveContainer width={400} height={400}>
            <PieChart>
              <Pie
                data={activityDepartmentData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {activityDepartmentData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart for Activity Designation */}
        <div>
          <h3>Activity Designation Distribution</h3>
          <ResponsiveContainer width={400} height={400}>
            <BarChart data={activityDesignationData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
