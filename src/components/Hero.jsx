import React, { useEffect } from 'react';
import '../css/hero.css';
import slider from '../assets/gallery/sliderbg.png'; // Ensure the path is correct
import Typed from 'typed.js'; // Import the typed.js library
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css'; // Import the AOS CSS

function Hero() {
  useEffect(() => {
    // Initialize typed.js for the typing effect
    const options = {
      strings: ["Web Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(".typed", options);

    // Initialize AOS (Animate on Scroll)
    AOS.init();

    // Cleanup typed.js when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section id="hero" className="hero section">
      <img src = {slider} alt="" data-aos="fade-in"/>
      <div
        className = "container"
        style={{
          paddingLeft: '50px',
          background : 'linear-gradient(45deg, rgb(255, 255, 255), rgb(194 98 34), gainsboro)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <h2 className = "myname">Uday Kumar</h2>
        <p className = "description">I'm a <span className="typed" data-typed-items="Web Developer"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
      </div>  
      </section>
    </>
  );
}

export default Hero;
