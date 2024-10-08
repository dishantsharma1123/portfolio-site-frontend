// src/components/MainContent.js
import styled from "styled-components";

const MainContent = styled.main`
  padding-top: 70px; /* Equal to Header's height */
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem; /* Optional: Add padding at the bottom for spacing */

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 480px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export default MainContent;
