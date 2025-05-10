import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application",
      field: "Computer Application",
      institution: "MES Institute of Technology and Management, Pune",
      year: "2024 - 2026",
      description: "Currently Pursuing my Masters Degree in Computer Application (MCA) from MES IMCC, Pune."
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Abasaheb Garware College, Pune",
      year: "2021 - 2024",
      description: "CGPA : 7.82"
    }
  ];

  return (
    <section className="card education-section">
      <h2>Education</h2>
      <div className="education-content">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            {edu.field && <h4>{edu.field}</h4>}
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 