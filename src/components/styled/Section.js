// src/components/styled/Section.js
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  max-width: 1200px; /* Consistent max-width across sections */
  padding: 60px 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

export default Section;
