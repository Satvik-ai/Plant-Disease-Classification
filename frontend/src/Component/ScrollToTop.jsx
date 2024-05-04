import React, { useState } from 'react';
import './scroll.css'
import { AiOutlineArrowUp } from 'react-icons/ai';
const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top of the window
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This adds smooth scrolling animation
    });
  };

  // Event listener to show/hide the button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });

  return (
    <div className="scroll-to-top-button">
      {showButton && (
        <button onClick={scrollToTop} className="scroll-button">
         <AiOutlineArrowUp/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
