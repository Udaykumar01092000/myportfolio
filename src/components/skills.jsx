import React from "react";
import "../css/skills.css";

function Skills() {
  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "PHP", level: 60 },
    { name: "Bootstrap", level: 75 },
    { name: "Wordpress/CMS", level: 90 },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-head">Skills</h2>
      <div className="skills-container mt-4">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {/* Skill Header */}
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            {/* Skill Bar */}
            <div className="skill-bar-wrap">
              <div
                className="skill-bar"
                style={{
                  "--percentage": skill.level, // Dynamically set percentage as a CSS variable
                  backgroundColor: getBarColor(skill.level),
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Function to set the bar color dynamically based on the level
const getBarColor = () => {
  return "#149ddd"; // Red for below 60%
};

export default Skills;
