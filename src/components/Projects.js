// src/components/Projects.js
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import Section from "./styled/Section"; // Import the Section component

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
  width: 100%;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

// Section Heading using the Section component's styles
const SectionHeading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #61dafb;
  animation: ${fadeIn} 1s ease forwards;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

// Project Card using styled-components
const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 280px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease forwards;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin: 10px 0;
  }
`;

// Image Container with placeholder image
const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://via.placeholder.com/300x150") center/cover no-repeat;
`;

// Project Title
const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: white;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

// Technologies List
const Technologies = styled.p`
  font-size: 0.85rem;
  color: #dcdcdc;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

// Icons Container
const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  svg {
    font-size: 1.3rem;
    color: white;
    margin: 0 8px;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: #61dafb;
    }
  }
`;

// Introduction Section
const IntroductionSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  max-width: 800px;
  width: 100%;
  font-size: 1.1rem;
  line-height: 1.5;
  color: white;
  animation: ${fadeIn} 1s ease forwards;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

// Technology Overview Section
const TechnologyOverview = styled.div`
  margin: 40px 0;
  padding: 40px 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  text-align: center;
  width: 100%;
`;

// Technology Grid
const TechnologyGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

// Technology Box
const TechBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 15px 25px;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

// Workflow Process Section
const ProcessSection = styled.div`
  margin: 40px 0;
  padding: 40px 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  text-align: center;
  width: 100%;
`;

// Process Step
const ProcessStep = styled.div`
  margin-bottom: 15px;
  color: white;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ProjectsContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
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
      <ProjectsContent>
        <ProjectCard>
          <ImageContainer />
          <ProjectTitle>Project One</ProjectTitle>
          <Technologies>React, Node.js, MongoDB</Technologies>
          <IconsContainer>
            <FaEye title="View Project" />
            <FaGithub title="View Github" />
          </IconsContainer>
        </ProjectCard>

        <ProjectCard>
          <ImageContainer />
          <ProjectTitle>Project Two</ProjectTitle>
          <Technologies>Vue, Firebase</Technologies>
          <IconsContainer>
            <FaEye title="View Project" />
            <FaGithub title="View Github" />
          </IconsContainer>
        </ProjectCard>

        {/* Add more ProjectCards as needed */}
      </ProjectsContent>

      {/* Technology Overview Section */}
      <TechnologyOverview>
        <SectionHeading>Technologies I Use</SectionHeading>
        <TechnologyGrid>
          <TechBox>React</TechBox>
          <TechBox>Node.js</TechBox>
          <TechBox>GraphQL</TechBox>
          <TechBox>MongoDB</TechBox>
          <TechBox>Vue</TechBox>
          <TechBox>Firebase</TechBox>
          {/* Add more technologies as needed */}
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
