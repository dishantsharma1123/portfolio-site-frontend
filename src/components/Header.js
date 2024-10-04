// src/components/Header.js
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
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

// Styled Components Definitions
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
    display: none; /* Hide on mobile */
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
    display: block; /* Show on mobile */
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
    display: none; /* Hide on larger screens */
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
  const location = useLocation();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <Logo to="/" onClick={scrollToTop}>
          My Portfolio
        </Logo>
        <Nav>
          <NavLink to="/" onClick={scrollToTop}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={scrollToTop}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={scrollToTop}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={scrollToTop}>
            Contact
          </NavLink>
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
          to="/"
          onClick={() => {
            scrollToTop();
            setIsOpen(false);
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          to="/about"
          onClick={() => {
            scrollToTop();
            setIsOpen(false);
          }}
        >
          About
        </MenuItem>
        <MenuItem
          to="/projects"
          onClick={() => {
            scrollToTop();
            setIsOpen(false);
          }}
        >
          Projects
        </MenuItem>
        <MenuItem
          to="/contact"
          onClick={() => {
            scrollToTop();
            setIsOpen(false);
          }}
        >
          Contact
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
