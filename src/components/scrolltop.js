import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons CSS
import '../css/scrolltop.css'; // Import CSS for styling

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="bi bi-arrow-up-circle icon"></i> {/* Bootstrap icon */}
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
