// src/components/Contact.js
import React, { useState } from "react";
import styled from "styled-components";
import SuccessMessage from "./SuccessMessage"; // Import the SuccessMessage component

const ContactContainer = styled.section`
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background: #f9f9f9; /* Lighter background */
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50; /* Darker text color for visibility */
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: #34495e; /* Slightly lighter than dark blue */
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #34495e; /* Dark text color for input */
  background: #fff; /* White background for input */

  &:focus {
    border-color: #61dafb; /* Focus color */
    outline: none; /* Remove default outline */
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #34495e; /* Dark text color for textarea */
  background: #fff; /* White background for textarea */

  &:focus {
    border-color: #61dafb; /* Focus color */
    outline: none; /* Remove default outline */
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background: #2c3e50; /* Button color */
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #34495e; /* Darker shade on hover */
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [isSuccess, setIsSuccess] = useState(false); // State to manage success message visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);
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
        setIsSuccess(true); // Show success message
        setFormData({ name: "", email: "", message: "", subject: "" }); // Reset form
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleCloseSuccessMessage = () => {
    setIsSuccess(false); // Hide success message
  };

  return (
    <ContactContainer>
      <SectionHeading>Contact Me</SectionHeading>
      <SectionText>
        If you would like to get in touch, please fill out the form below:
      </SectionText>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
      {isSuccess && <SuccessMessage onClose={handleCloseSuccessMessage} />}
    </ContactContainer>
  );
};

export default Contact;
