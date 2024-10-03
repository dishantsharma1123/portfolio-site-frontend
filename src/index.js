// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Importing the ReactDOM Client for modern React
import App from "./App"; // Import the main App component

// Create the root element where the React application will be mounted
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the React application within the React.StrictMode
// React.StrictMode is a tool for highlighting potential problems in an application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
