// src/components/Home.js
import React from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowRight, FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";

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

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled.section`
  width: 100%;
  height: 80vh; /* Reduced height for better scaling */
  background-image: url("https://images.unsplash.com/photo-1722089591912-f0a83cda2a59?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
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
    font-size: 3rem; /* Reduced font size */
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

const FeaturesSection = styled.section`
  max-width: 1200px;
  padding: 60px 20px; /* Reduced padding */
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
  padding: 30px; /* Reduced padding */
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: calc(33.33% - 40px);
  margin: 10px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  svg {
    font-size: 2.5rem; /* Reduced icon size */
    color: #3b82f6;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.25rem; /* Reduced font size */
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #666;
    font-size: 0.9rem; /* Reduced font size */
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
  padding: 60px 20px; /* Reduced padding */
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  h2 {
    font-size: 2rem; /* Reduced font size */
    margin-bottom: 20px;
    animation: ${fadeIn} 1.5s ease-out;
  }

  button {
    padding: 10px 30px; /* Reduced padding */
    border: none;
    border-radius: 5px;
    background: #2b6cb0;
    color: #fff;
    font-size: 1rem; /* Reduced font size */
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    z-index: 2;

    &:hover {
      background: #3182ce;
      transform: translateY(-3px);
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
  margin-top: 20px; /* Reduced margin */
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <h1>Welcome to My Portfolio</h1>
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
