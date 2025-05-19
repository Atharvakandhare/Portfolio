import React from 'react';

const Contact = () => {
  return (
    <section className="card contact-section">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <a href="mailto:atharvakandhare101@gmail.com" className="email-link">
              atharvakandhare101@gmail.com
            </a>
          </div>
          <div className="info-item">
            <h3>Mobile</h3>
            <p>+91 9307092776</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 