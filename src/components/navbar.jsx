import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import MyProfile from '../assets/gallery/myprofile.jpg';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div id="header" className={`header d-flex flex-column ${isOpen ? 'header-show' : ''}`}>
        <div className="profile-img">
          <img src={MyProfile} alt="" className="img-fluid rounded-circle" />
        </div>
        <a href="index.html" className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename">Uday Kumar</h1>
        </a>
        <div className="social-links text-center">
          <Link to = "https://www.linkedin.com/in/uday-kumar-0290711aa/" target="_blank" className ="linkedin"><i class="bi bi-linkedin"></i></Link>
          <Link to = "https://www.facebook.com/murarishettyudaykumar/" target="_blank" className ="facebook"><i class="bi bi-facebook"></i></Link>
          <Link to = "https://www.instagram.com/uday_kumar2345/" target="_blank" className ="linkedin"><i class="bi bi-instagram"></i></Link>
          <Link to = "#" target="_blank" className ="skype"><i className = "bi bi-skype"></i></Link>
        </div>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <ScrollLink to="hero" smooth={true} duration={500} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <i className="bi bi-house navicon"></i> Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="skills" smooth={true} duration={500} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <i className="bi bi-code-slash navicon"></i> Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="resume" smooth={true} duration={500} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="portfolio" smooth={true} duration={500} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <i className="bi bi-images navicon"></i> Portfolio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <i className="bi bi-hdd-stack navicon"></i> Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <i className="bi bi-envelope navicon"></i> Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="header-toggle"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <i className="bi bi-list"></i>
      </div>
    </div>
  );
}

export default Navbar;
