import React from 'react';

const Skills = () => {
  const skillsData = {
    "Frontend": ["React", "JavaScript", "HTML", "CSS"],
    "Backend": ["Node.js", "Express", "Java/JDBC", "MongoDB", "SQL", "XAMPP"],
    "Other Tools": ["Git", "VS Code", "Postman", "Swing/AWT", "Servlet", "JSP"],
    "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Web Application Security"]
  };

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div key={index} className="skill-category-card">
            <h3>{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 