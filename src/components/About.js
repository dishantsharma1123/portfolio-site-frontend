// src/components/About.js
import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 100%;
  padding: 40px 20px;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  background-image: url("https://images.unsplash.com/photo-1723561246850-f58894fc3f64?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  z-index: 2;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const HeaderSubtitle = styled.h2`
  font-size: 1.2rem;
  z-index: 2;
  margin: 10px 0 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  text-align: center;
  margin: 20px 0;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 10px;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SkillsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-top: 40px;
`;

const SkillCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin: 15px;
  width: calc(33.33% - 30px);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.7rem;
  color: #333;
  margin-bottom: 10px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 50%;
    height: 4px;
    background: #61dafb;
    bottom: -5px;
    left: 25%;
    border-radius: 5px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const SkillDescription = styled.p`
  color: #666;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Section = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  .project {
    margin: 15px 0;
    color: #3182ce;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <HeaderContainer>
        <Overlay />
        <HeaderTitle>About Me</HeaderTitle>
        <HeaderSubtitle>Passionate Software Developer</HeaderSubtitle>
      </HeaderContainer>

      <Description>
        I am a passionate software developer with a strong foundation in
        building efficient and scalable web applications. My journey in tech
        started when I discovered the joy of problem-solving and creating
        dynamic user experiences. I thrive on learning new technologies and
        applying them to real-world projects.
      </Description>

      <SkillsSection>
        <SkillCard>
          <SkillTitle>Web Development</SkillTitle>
          <SkillDescription>
            Proficient in HTML, CSS, and JavaScript. Experienced with React and
            Node.js.
          </SkillDescription>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Mobile Development</SkillTitle>
          <SkillDescription>
            Building responsive mobile applications using React Native and
            Flutter.
          </SkillDescription>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Cloud Computing</SkillTitle>
          <SkillDescription>
            Familiar with AWS and Azure for deploying scalable applications.
          </SkillDescription>
        </SkillCard>
        <SkillCard>
          <SkillTitle>UI/UX Design</SkillTitle>
          <SkillDescription>
            Experience in creating user-friendly interfaces and enhancing user
            experiences.
          </SkillDescription>
        </SkillCard>
      </SkillsSection>

      <Section>
        <h3>My Experience</h3>
        <p>
          Over the past few years, I have worked on various projects, ranging
          from small websites to large-scale applications. I have collaborated
          with cross-functional teams and have a strong understanding of Agile
          methodologies. I am committed to delivering high-quality solutions
          that meet client needs and exceed expectations.
        </p>
      </Section>

      <Section>
        <h3>Projects</h3>
        <p>Here are some of my notable projects:</p>
        <div className="project">✔ Project 1: E-commerce Website</div>
        <div className="project">✔ Project 2: Social Media App</div>
        <div className="project">✔ Project 3: Task Management Tool</div>
      </Section>

      <Section>
        <h3>Education</h3>
        <p>
          Bachelor of Science in Computer Science <br />
          XYZ University, 2018 - 2022
        </p>
      </Section>

      <Section>
        <h3>Contact Me</h3>
        <p>
          Feel free to reach out for collaborations or job opportunities! You
          can email me at:
          <a href="mailto:your-email@example.com"> your-email@example.com</a>
        </p>
      </Section>
    </AboutContainer>
  );
};

export default About;
