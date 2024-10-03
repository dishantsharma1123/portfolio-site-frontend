// src/App.js
import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import GlobalStyles from "./GlobalStyles";
import MainContent from "./components/MainContent";

// Container for the entire application, ensuring it takes the full viewport height
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Content area that grows to fill available space between header and footer
const Content = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px; /* Reduced padding for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 10px; /* Further reduced padding for mobile devices */
  }
`;

const App = () => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContent>
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Content>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
