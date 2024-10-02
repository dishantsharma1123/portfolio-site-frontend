// src/components/SuccessMessage.js
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import TickImageSrc from "../assets/Yes_Check_Circle.svg.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const TickImage = styled.img`
  width: 70px;
  height: auto;
  margin-bottom: 10px;
`;

const SuccessMessageText = styled.p`
  font-size: 1.2rem;
  color: #4caf50;
  text-align: center;
  margin: 0;
`;

const TimerText = styled.p`
  font-size: 1rem;
  color: #4caf50;
  text-align: center;
  margin-top: 10px;
`;

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
