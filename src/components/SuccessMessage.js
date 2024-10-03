// src/components/SuccessMessage.js
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import TickImageSrc from "../assets/Yes_Check_Circle.svg.png";

// Define the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Overlay for the success message
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Container for the success message
const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  padding: 20px;
  border-radius: 10px;
  background-color: #e8f5e9;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%; /* Adjust width for smaller screens */
  }

  @media (max-width: 480px) {
    width: 95%; /* Further adjust width for mobile devices */
    padding: 15px; /* Adjust padding for mobile devices */
  }
`;

// Image for the success tick
const TickImage = styled.img`
  width: 70px;
  height: auto;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    width: 60px; /* Slightly smaller image on mobile devices */
  }
`;

// Text for the success message
const SuccessMessageText = styled.p`
  font-size: 1.2rem;
  color: #4caf50;
  text-align: center;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1rem; /* Smaller font size for better readability on mobile */
  }
`;

// Text for the countdown timer
const TimerText = styled.p`
  font-size: 1rem;
  color: #4caf50;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Adjust font size for mobile devices */
  }
`;

// SuccessMessage component
const SuccessMessage = ({ onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <Overlay>
      <SuccessContainer>
        <TickImage src={TickImageSrc} alt="Success Tick" />
        <SuccessMessageText>Message sent successfully!</SuccessMessageText>
        <TimerText>This will close in {secondsLeft} seconds</TimerText>
      </SuccessContainer>
    </Overlay>
  );
};

export default SuccessMessage;
