import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    full_name: "",
    date_of_birth: "",
    address: "",
    identity_document: "",

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(
          "/api/auth/register",
            formData
        );

      if (response.status === 201) {
        // Registration successful
        // You can redirect the user to a success page or show a success message
        alert("Registration successful! You can now log in.");
        // You can also clear the form fields if needed
        setFormData({
          email: "",
          password: "",
          full_name: "",
          date_of_birth: "",
          address: "",
          identity_document: "",
        });
      } else {
        // Handle registration error
        const data = await response.json();
        // Display the error message to the user
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      // Handle network or other errors
      alert("An error occurred during registration. Please try again.");
    }
    // console.log("Form Data:", formData);

  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <input
        type="text"
        name="full_name"
        value={formData.full_name}
        onChange={handleInputChange}
        placeholder="Full Name"
      />
      <input
        type="date"
        name="date_of_birth"
        value={formData.date_of_birth}
        onChange={handleInputChange}
        placeholder="Date of Birth"
      />

      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="identity_document"
        value={formData.identity_document}
        onChange={handleInputChange}
        placeholder="Identity Document"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
