// src/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-size: 16px; /* Base font size */
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

    /* General global styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    overflow-x: hidden;
  }

  /* Slick slider styles */
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-prev, .slick-next {
    font-size: 2rem;
    color: #333 !important;
    z-index: 10;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #333;
  }

  .slick-slide {
    padding: 20px;
    text-align: center;
    transition: all 0.5s ease-in-out;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3 {
    margin: 20px 0;
  }

  /* Responsive Typography */
  @media (max-width: 768px) {
    html {
      font-size: 14px; /* Decrease base font size on small screens */
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px; /* Further decrease on very small screens */
    }
  }
`;

export default GlobalStyles;
