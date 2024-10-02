// src/components/Footer.js
import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Define a color palette for consistency
const colors = {
  primary: "#1E3A8A", // Dark Blue
  secondary: "#3B82F6", // Medium Blue
  accent: "#60A5FA", // Light Blue
  text: "#FFFFFF", // White
  hoverAccent: "#00E5FF", // Brilliant Sky Blue for brighter hover effect
  mutedText: "#D1D5DB", // Light Gray for less prominent text
};

// Container for the entire footer
const FooterContainer = styled.footer`
  background: linear-gradient(
    90deg,
    ${colors.primary} 0%,
    ${colors.secondary} 100%
  );
  color: ${colors.text};
  padding: 40px 20px;
  width: 100%;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

// Wrapper to contain footer content with maximum width
const FooterWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Section for footer links
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

// Individual link items
const FooterLink = styled(Link)`
  color: ${colors.text};
  text-decoration: none;
  margin: 5px 0;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  text-align: center;

  &:hover {
    color: ${colors.hoverAccent};
  }
`;

// Section for social media icons
const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// Individual social media icon links
const SocialIconLink = styled.a`
  color: ${colors.text};
  font-size: 1.2rem;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.hoverAccent};
  }
`;

// Section for the logo or branding
const Branding = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

// Footer branding/logo
const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.text};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.hoverAccent};
  }
`;

// Footer bottom text
const FooterBottom = styled.div`
  border-top: 1px solid ${colors.mutedText};
  padding-top: 15px;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  color: ${colors.mutedText};
`;

// Example navigation links
const navLinks = [
  { name: "Home", href: "/" }, // Use relative paths for HashRouter
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

// Footer component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        {/* Branding Section */}
        <Branding>
          <Logo to="/">My Portfolio</Logo>
        </Branding>

        {/* Navigation Links */}
        <FooterLinks>
          {navLinks.map((link) => (
            <FooterLink key={link.name} to={link.href}>
              {link.name}
            </FooterLink>
          ))}
        </FooterLinks>

        {/* Social Media Icons */}
        <SocialMedia>
          <SocialIconLink
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </SocialIconLink>
          <SocialIconLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </SocialIconLink>
          <SocialIconLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIconLink>
        </SocialMedia>
      </FooterWrapper>

      <FooterBottom>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
