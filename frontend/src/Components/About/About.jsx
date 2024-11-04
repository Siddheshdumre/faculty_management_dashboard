// About.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';
import about_img from '../../assets/about_img.jpg';
import skill from '../../assets/skill_managemant.png';
import rec from '../../assets/recommendation.png';
import ach from '../../assets/achievements.png';

const AboutSection = ({ title, text, imgSrc, imgPosition }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only the first time it's in view
    threshold: 0.2,    // Triggers when 20% of the element is in view
  });

  return (
    <div
      ref={ref}
      className={`about ${imgPosition === 'right' ? 'reverse' : ''} ${inView ? 'animate' : ''}`}
    >
      <div className="about-left">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="about-right">
        <img src={imgSrc} alt="about section" />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <AboutSection
        title="Faculty Registration"
        text="Easily register and manage faculty information."
        imgSrc={about_img}
        imgPosition="right"
      />
      <AboutSection
        title="Skillset Management"
        text="Track and improve faculty skills and expertise."
        imgSrc={skill}
        imgPosition="left"
      />
      <AboutSection
        title="Achievements"
        text="Document and showcase faculty and student achievements."
        imgSrc={ach}
        imgPosition="right"
      />
      <AboutSection
        title="Training Programs"
        text="Recommend and track upskilling training programs."
        imgSrc={rec}
        imgPosition="left"
      />
    </>
  );
};

export default About;
