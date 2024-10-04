// ScrollButton.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// Styled Components

const ScrollButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    bottom: 15px;
    right: 15px;
    gap: 8px;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  opacity: 0.7;
  transition: opacity 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Ensures the button doesn't stretch */
  flex-shrink: 0;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
  }

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      // Adjust this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to bottom smoothly
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <ScrollButtonContainer>
          <Button
            onClick={scrollToTop}
            aria-label="Scroll to Top"
            title="Scroll to Top"
          >
            <FaArrowUp />
          </Button>
          <Button
            onClick={scrollToBottom}
            aria-label="Scroll to Bottom"
            title="Scroll to Bottom"
          >
            <FaArrowDown />
          </Button>
        </ScrollButtonContainer>
      )}
    </>
  );
};

export default ScrollButton;
