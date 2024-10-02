// src/components/Header.js
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// Define a color palette for consistency
const colors = {
  primary: "#1E3A8A", // Dark Blue
  secondary: "#3B82F6", // Medium Blue
  accent: "#60A5FA", // Light Blue
  text: "#FFFFFF", // White
  hoverAccent: "#00E5FF", // Brilliant Sky Blue for brighter hover effect
  mutedText: "#D1D5DB", // Light Gray for less prominent text
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background: linear-gradient(
    90deg,
    ${colors.primary} 0%,
    ${colors.secondary} 100%
  );
  color: ${colors.text};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 70px; /* Fixed height for consistent spacing */
`;

const Logo = styled(Link)`
  font-size: 1.7rem;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.hoverAccent};
  }

  @media (hover: none) {
    &:hover {
      color: inherit;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  margin: 0 1.5rem;
  color: ${colors.text};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.hoverAccent};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${colors.hoverAccent};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (hover: none) {
    &:hover {
      color: inherit;
    }

    &::after {
      transform: scaleX(0);
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  color: ${colors.text};

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

// Overlay for the mobile menu to create a dimmed background effect
const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 58, 138, 0.8); /* Semi-transparent dark blue */
  z-index: 999;
  transition: opacity 0.3s ease;
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 300px;
  height: 100vh;
  background: ${colors.primary};
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  padding-top: 60px;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuItem = styled(Link)`
  padding: 1.5rem 2rem;
  color: ${colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${colors.secondary};
    color: ${colors.hoverAccent};
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: ${colors.text};
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target.id !== "hamburger-icon"
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling when menu is open
    } else {
      document.body.style.overflow = "unset";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <HeaderContainer>
        <Logo to="/portfolio-site-frontend/">My Portfolio</Logo>
        <Nav>
          <NavLink to="/portfolio-site-frontend/">Home</NavLink>
          <NavLink to="/portfolio-site-frontend/about/">About</NavLink>
          <NavLink to="/portfolio-site-frontend/projects/">Projects</NavLink>
          <NavLink to="/portfolio-site-frontend/contact/">Contact</NavLink>
        </Nav>
        <HamburgerIcon onClick={toggleMenu} id="hamburger-icon">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </HamburgerIcon>
      </HeaderContainer>
      <Overlay isOpen={isOpen} onClick={toggleMenu} />
      <Menu ref={menuRef} isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>
          <FaTimes size={24} />
        </CloseButton>
        <MenuItem
          to="/portfolio-site-frontend/"
          onClick={() => setIsOpen(false)}
        >
          Home
        </MenuItem>
        <MenuItem
          to="/portfolio-site-frontend/about/"
          onClick={() => setIsOpen(false)}
        >
          About
        </MenuItem>
        <MenuItem
          to="/portfolio-site-frontend/projects/"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </MenuItem>
        <MenuItem
          to="/portfolio-site-frontend/contact/"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
