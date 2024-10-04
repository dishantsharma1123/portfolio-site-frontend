// src/components/Contact.js
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaEnvelope, FaTimes } from "react-icons/fa";
import SuccessMessage from "./SuccessMessage"; // Ensure this component is correctly implemented
import Section from "./styled/Section"; // Import the reusable Section component

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main Contact Container
const ContactContainer = styled.div`
  width: 100%;
  background: #f9f9f9; /* Light background for consistency */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 40px 0; /* Vertical padding */
`;

// Section Heading
const SectionHeading = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease forwards;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

// Section Text
const SectionText = styled.p`
  font-size: 1.1rem;
  color: #34495e;
  margin-bottom: 30px;
  animation: ${fadeIn} 1s ease forwards;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// Form Container using Section for consistent padding and max-width
const FormContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// Form Styling
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Input Fields
const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #34495e;
  background: #fff;
  box-sizing: border-box;

  &:focus {
    border-color: #61dafb;
    outline: none;
    box-shadow: 0 0 5px rgba(97, 218, 251, 0.5);
  }
`;

// TextArea Field
const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #34495e;
  background: #fff;
  resize: none; /* Prevent resizing */
  box-sizing: border-box;

  &:focus {
    border-color: #61dafb;
    outline: none;
    box-shadow: 0 0 5px rgba(97, 218, 251, 0.5);
  }
`;

// Submit Button
const SubmitButton = styled.button`
  padding: 15px 30px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background: #2c3e50;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #34495e;
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 12px 25px;
  }
`;

// Styled Success Message Wrapper
const SuccessWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://alert-perfection-production.up.railway.app/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsError(true);
    }
  };

  // Close Success Message
  const handleCloseSuccessMessage = () => {
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <ContactContainer>
      {/* Contact Section Heading */}
      <SectionHeading>Contact Me</SectionHeading>

      {/* Contact Section Text */}
      <SectionText>
        If you would like to get in touch, please fill out the form below:
      </SectionText>

      {/* Form Section */}
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Your Name"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Your Email"
          />
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            aria-label="Subject"
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            aria-label="Your Message"
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </FormContainer>

      {/* Success Message */}
      {isSuccess && (
        <SuccessWrapper>
          <SuccessMessage onClose={handleCloseSuccessMessage} />
        </SuccessWrapper>
      )}

      {/* Error Message */}
      {isError && (
        <SuccessWrapper>
          <SuccessMessage
            message="Failed to send message. Please try again later."
            onClose={handleCloseSuccessMessage}
            isError
          />
        </SuccessWrapper>
      )}
    </ContactContainer>
  );
};

export default Contact;
