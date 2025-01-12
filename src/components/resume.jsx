import React from 'react';
import { Link } from 'react-router-dom';
import '../css/resume.css';

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2 className="resume-head">Resume</h2>
      <div class="section-title" data-aos="fade-up">
        <p>Here you can find detailed information about my professional 
          background,education, skills, work experience, projects, and more.
          Feel free to explore and download my resume for a comprehensive 
          overview of my qualifications and experiences.</p>
          <Link to = '/mycv.pdf' class="resumebtn" download target='_blank'><i class="fas fa-download"></i><span>Download Resume</span></Link>
      </div>
    </section>
  );
}

export default Resume;
