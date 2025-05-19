import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: "BioNexa Website",
      description: "BioNexa transforms the way patients and doctors connect, making healthcare more accessible and efficient. With a secure authentication system, an intuitive interface, and seamless communication between patients and doctors, the platform ensures a hassle-free consultation experience. ",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://bionexa-gpxq.onrender.com/"
    },
    {
      title: "Online Attendance Tracking System",
      description: "A Responsive Online Attendance Tracking System for schools and colleges to manage student attendance and generate reports.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/Atharvakandhare/Online-Attendance-System"
    },
    {
      title: "Colombus College Magazine Website",
      description: "A Responsive Magazine Website for Colombus College to showcase their events, activities, and achievements.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://columbus-f62u.onrender.com/"
    },
    {
      title: "Biscotti Cafe Website",
      description: "A Responsive Cafe Website for Biscotti Cafe to showcase their menu, events and Customer can reserve table online to save their valuable time",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP"],
      link: "https://github.com/Atharvakandhare/Biscotti-Cafe-Website/tree/master"
    },
    {
      title: "Bank Management System",
      description: "A Responsive Bank Management System for banks to manage their customers, accounts, and transactions.",
      technologies: ["JAVA","Swings","AWT","JDBC","SQL"],
      link: "https://github.com/Atharvakandhare/Banking-System"
    }
  ];

  return (
    <section className="card projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 