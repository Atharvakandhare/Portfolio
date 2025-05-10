import React from 'react';
import '../components/styles.css';
import atharvaImage from '../assets/atharva2.jpg';

const Header = () => {
  return (
    <div className="header-section">
      <div className="header-content">
        <div className="header-image-container">
          <img src={atharvaImage} alt="Atharva Kandhare" className="header-image" />
        </div>
        <div className="header-info">
          <h1 className="header-name">Atharva Kandhare</h1>
          <h2 className="header-title">MCA Student</h2>
          <p className="header-description">
            Passionate about learning new things, believes in collaborative teamwork to deliver innovative and effective solutions. 
            Self-motivated individual who thrives on challenging personal limits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header; 