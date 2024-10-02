// src/components/Projects.js
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container for the Projects section
const ProjectsContainer = styled.div`
  padding: 100px 20px;
  background: linear-gradient(
    135deg,
    #2c3e50 0%,
    #34495e 100%
  ); /* Gradient background */
  color: white;
`;

// Section Heading
const SectionHeading = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #61dafb; /* Header color */
  animation: ${fadeIn} 1s ease forwards; // Add animation here
`;

// Project Card Container
const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1); /* Light transparent background */
  border-radius: 10px;
  padding: 20px;
  margin: 20px; /* Margin for spacing between cards */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 300px; /* Use max-width for better responsiveness */
  height: 450px; /* Increased height for the image */
  transition: box-shadow 0.3s ease; /* Removed transform to avoid floating effect */
  opacity: 0; /* Start invisible */
  animation: ${fadeIn} 0.8s ease forwards; /* Animation for fade-in */

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4); /* Keep hover shadow effect */
  }
`;

// Image Container
const ImageContainer = styled.div`
  width: 100%;
  height: 150px; /* Set height for the image */
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://via.placeholder.com/300x150") center/cover no-repeat; /* Placeholder image */
`;

// Project Title
const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
`;

// Technologies List
const Technologies = styled.p`
  font-size: 0.9rem;
  color: #dcdcdc; /* Lighter gray for better contrast */
  margin-bottom: 30px;
  text-align: center;
`;

// Icons Container
const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  svg {
    font-size: 1.5rem;
    color: white;
    margin: 0 10px; /* Reduced margin for closer spacing */
    transition: color 0.3s ease;
    cursor: pointer; /* Change cursor to pointer on hover */

    &:hover {
      color: #61dafb; /* Light blue on hover */
    }
  }
`;

// New Section: Introduction
const IntroductionSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.2rem;
  line-height: 1.5;
  color: white;
  animation: ${fadeIn} 1s ease forwards; // Add animation here
`;

// New Section: Technology Overview
const TechnologyOverview = styled.div`
  margin: 50px 0;
  padding: 50px 20px;
  background: rgba(0, 0, 0, 0.6); /* Darker background for contrast */
  border-radius: 10px;
  text-align: center;
`;

// Technology Grid
const TechnologyGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

// Technology Box
const TechBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  color: white;
`;

// New Section: Workflow Process
const ProcessSection = styled.div`
  margin: 50px 0;
  padding: 50px 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  text-align: center;
`;

// Process Step
const ProcessStep = styled.div`
  margin-bottom: 20px;
  color: white; /* Ensure text color is visible */
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      {/* Projects Section Heading */}
      <SectionHeading>My Portfolio</SectionHeading>

      {/* Introduction Section */}
      <IntroductionSection>
        I have worked on several web applications, utilizing a variety of modern
        technologies. My portfolio showcases these projects, which emphasize
        clean, performant code and responsive design.
      </IntroductionSection>

      {/* Projects Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <ProjectCard>
          <ImageContainer />
          <ProjectTitle>Project One</ProjectTitle>
          <Technologies>React, Node.js, MongoDB</Technologies>
          <IconsContainer>
            <FaEye />
            <FaGithub />
          </IconsContainer>
        </ProjectCard>

        <ProjectCard>
          <ImageContainer />
          <ProjectTitle>Project Two</ProjectTitle>
          <Technologies>Vue, Firebase</Technologies>
          <IconsContainer>
            <FaEye />
            <FaGithub />
          </IconsContainer>
        </ProjectCard>
      </div>

      {/* Technology Overview Section */}
      <TechnologyOverview>
        <SectionHeading>Technologies I Use</SectionHeading>
        <TechnologyGrid>
          <TechBox>React</TechBox>
          <TechBox>Node.js</TechBox>
          <TechBox>GraphQL</TechBox>
          <TechBox>MongoDB</TechBox>
        </TechnologyGrid>
      </TechnologyOverview>

      {/* Workflow Process Section */}
      <ProcessSection>
        <SectionHeading>My Development Process</SectionHeading>
        <ProcessStep>1. Research & Discovery</ProcessStep>
        <ProcessStep>2. Design & Planning</ProcessStep>
        <ProcessStep>3. Development & Testing</ProcessStep>
        <ProcessStep>4. Deployment & Monitoring</ProcessStep>
      </ProcessSection>
    </ProjectsContainer>
  );
};

export default Projects;
