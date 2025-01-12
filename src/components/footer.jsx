import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css"; // Add custom styles here if needed

const Footer = () => {

    const handleScrollToHero = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
    
        // Scroll to the Hero component
        const heroElement = document.getElementById("hero");
        if (heroElement) {
          heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

  return (
    <footer className="py-3 pt-3 pb-3 footer-section">
      <div className="text-center">
        <p className="mb-1">© Copyright   <b>Uday Portfolio</b> All Rights Reserved</p>
         <p className="mb-0">
          Designed by{" "}
          <Link
            to ="#"
            onClick={handleScrollToHero}
            className="text-dark text-decoration-none"
          >
            <span style={{color : "#149ddd"}}>Uday Kumar</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
