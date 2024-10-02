// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import GlobalStyles from "./GlobalStyles";
import MainContent from "./components/MainContent";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
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
              <Route path="/portfolio-site-frontend/" element={<Home />} />
              <Route
                path="/portfolio-site-frontend/about/"
                element={<About />}
              />
              <Route
                path="/portfolio-site-frontend/projects/"
                element={<Projects />}
              />
              <Route
                path="/portfolio-site-frontend/contact/"
                element={<Contact />}
              />
            </Routes>
          </Content>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
