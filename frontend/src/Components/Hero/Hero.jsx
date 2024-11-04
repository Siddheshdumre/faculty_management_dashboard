import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Welcome to Faculty Management System</h1>
        <p>Welcome to the Faculty Management System, designed for seamless faculty data management. Track faculty profiles, skill sets, achievements, and detailed statistics effortlessly, helping you make informed decisions and maintain up-to-date records. Simplify administration and elevate faculty management in one integrated solution.</p>
        <button className="btn">Dashboard</button>
      </div>
    </div>
  )
}

export default Hero;