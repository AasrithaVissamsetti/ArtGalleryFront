import React, { useState } from "react";
import axios from "axios";
import "./AdminSignUp.css";

const AdminSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // State for validation errors

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });

    // Inline validation
    if (id === "name") {
      setErrors((prev) => ({
        ...prev,
        name: value.length < 6 ? "Name must be at least 6 characters." : "",
      }));
    }

    if (id === "email") {
      setErrors((prev) => ({
        ...prev,
        email: !/\S+@\S+\.\S+/.test(value) ? "Invalid email format." : "",
      }));
    }

    if (id === "password") {
      setErrors((prev) => ({
        ...prev,
        password: value.length < 6 ? "Password must be at least 6 characters." : "",
      }));
    }

    if (id === "confirmPassword") {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: value !== formData.password ? "Passwords do not match." : "",
      }));
    }

    if (id === "phoneNumber") {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: !/^\d{10}$/.test(value) ? "Phone number must be 10 digits." : "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields or validation errors
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.phoneNumber ||
      !formData.gender
    ) {
      setMessage("All fields are required.");
      return;
    }

    if (Object.values(errors).some((error) => error)) {
      setMessage("Please fix the validation errors before submitting.");
      return;
    }

    try {
      // Make API call to register the admin
      const response = await axios.post("http://localhost:2000/api/admins/register", formData);

      setMessage("Registration successful! Redirecting to login...");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        gender: "",
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/AdminLogin";
      }, 2000);
    } catch (error) {
      if (error.response) {
        setMessage(`Error: ${error.response.data.message || error.response.data}`);
      } else if (error.request) {
        setMessage("Error: No response from the server.");
      } else {
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="admin-signup-container">
      <div className="admin-signup-card">
        <h1 className="admin-signup-title">Admin Sign Up</h1>
        {message && <div className="error-message">{message}</div>}
        <form className="admin-signup-form" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="admin-input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            {errors.name && <small className="validation-error">{errors.name}</small>}
          </div>

          {/* Email Field */}
          <div className="admin-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            {errors.email && <small className="validation-error">{errors.email}</small>}
          </div>

          {/* Phone Number Field */}
          <div className="admin-input-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
            {errors.phoneNumber && <small className="validation-error">{errors.phoneNumber}</small>}
          </div>

          {/* Gender Field */}
          <div className="admin-input-group">
            <label>Gender</label>
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="Male"
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  checked={formData.gender === "Male"}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="Female"
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  checked={formData.gender === "Female"}
                />
                Female
              </label>
            </div>
            {!formData.gender && <small className="validation-error">Please select your gender.</small>}
          </div>

          {/* Password Field */}
          <div className="admin-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
            {errors.password && <small className="validation-error">{errors.password}</small>}
          </div>

          {/* Confirm Password Field */}
          <div className="admin-input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
            {errors.confirmPassword && (
              <small className="validation-error">{errors.confirmPassword}</small>
            )}
          </div>

          <button type="submit" className="admin-signup-btn">
            Sign Up
          </button>

          <p className="admin-login-redirect">
            Already have an account?{" "}
            <a href="/AdminLogin" className="admin-login-link">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminSignUp;
