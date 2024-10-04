// src/components/Home.js
import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaArrowDown,
} from "react-icons/fa";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(0deg);
  } 
  40% {
    transform: translateY(15px) rotate(10deg);
  } 
  60% {
    transform: translateY(7px) rotate(-10deg);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
`;

// Styled Components
const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled.section`
  width: 100%;
  height: 80vh; /* Adjust as needed */
  background-image: url("https://images.unsplash.com/photo-1722089591912-f0a83cda2a59?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    animation: ${fadeIn} 2s ease-out forwards;
    opacity: 0;
    z-index: 2;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const DownArrow = styled(FaArrowDown)`
  position: absolute;
  bottom: 30px; /* Slightly higher for better visibility */
  font-size: 3rem; /* Increased size */
  color: #fff;
  cursor: pointer;
  animation: ${bounce} 2s infinite, ${rotate} 2s infinite;
  z-index: 2;

  /* Gradient color using background-clip */
  background: linear-gradient(45deg, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Adding shadow for depth */
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  /* Enhanced hover effect */
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #e2e8f0; /* Faint color change */
    transform: translateY(-5px) scale(1.2); /* Move up slightly and enlarge */
  }

  /* Responsiveness */
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const FeaturesSection = styled.section.attrs(() => ({
  id: "features",
}))`
  max-width: 1200px;
  padding: 60px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: calc(33.33% - 40px);
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  svg {
    font-size: 2.5rem;
    color: #3b82f6;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px 0;
  }

  @media (max-width: 480px) {
    svg {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

const CTASection = styled.section`
  width: 100%;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    animation: ${fadeIn} 1.5s ease-out;
  }

  button {
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    background: #2b6cb0;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    z-index: 2;
    display: flex;
    align-items: center;

    &:hover {
      background: #3182ce;
      transform: translateY(-3px);
    }

    svg {
      margin-left: 8px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
    }

    button {
      font-size: 0.9rem;
      padding: 8px 20px;
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

// Home Component
const Home = () => {
  // Scroll handler
  const scrollToFeatures = () => {
    const features = document.getElementById("features");
    if (features) {
      features.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <h1>Welcome to My Portfolio</h1>
        <DownArrow onClick={scrollToFeatures} aria-label="Scroll to Features" />
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <FeatureCard>
          <FaCode />
          <h3>Web Development</h3>
          <p>
            Building sleek and performant web applications using modern
            technologies.
          </p>
        </FeatureCard>
        <FeatureCard>
          <FaMobileAlt />
          <h3>Mobile Responsive</h3>
          <p>Ensuring that your projects look great on every device.</p>
        </FeatureCard>
        <FeatureCard>
          <FaCloud />
          <h3>Cloud Integration</h3>
          <p>
            Seamlessly integrating cloud solutions for scalability and
            performance.
          </p>
        </FeatureCard>
      </FeaturesSection>

      {/* Call to Action Section */}
      <CTASection>
        <h2>Ready to Collaborate?</h2>
        <button>
          Get in Touch <FaArrowRight />
        </button>

        {/* Google Map */}
        <MapContainer>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.048040195284!2d76.9009191!3d30.7039849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb9070413b07%3A0x4e8e8bcf5d78d9a2!2zMzDCsDQyJzEzLjAiTiA3NsKwNTQnMDMuMyJF!5e0!3m2!1sen!2sin!4v1631722956191!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapContainer>
      </CTASection>
    </HomeContainer>
  );
};

export default Home;
