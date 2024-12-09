import React, { useState } from "react";
import axios from "axios";
import "./CustSignup.css";

const CustomerSignUp = () => {
  const [user, setUser] = useState({
    accountNumber: "", // Account number comes first
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // State for validation errors

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });

    // Inline validation
    if (e.target.id === "accountNumber") {
      if (!/^\d+$/.test(e.target.value)) {
        setErrors((prev) => ({ ...prev, accountNumber: "Account number must be numeric." }));
      } else {
        setErrors((prev) => ({ ...prev, accountNumber: "" }));
      }
    }

    if (e.target.id === "name") {
      if (e.target.value.length < 6) {
        setErrors((prev) => ({ ...prev, name: "Name must be at least 6 characters." }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }

    if (e.target.id === "email") {
      if (!/\S+@\S+\.\S+/.test(e.target.value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email format." }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    if (e.target.id === "password") {
      if (e.target.value.length < 6) {
        setErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters." }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }

    if (e.target.id === "confirmPassword") {
      if (e.target.value !== user.password) {
        setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match." }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields or validation errors before proceeding
    if (
      !user.accountNumber ||
      !user.name ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      setMessage("All fields are required.");
      return;
    }

    if (Object.values(errors).some((error) => error)) {
      setMessage("Please fix the validation errors before submitting.");
      return;
    }

    // Password match validation
    if (user.password !== user.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      // Make API call to register the user
      const response = await axios.post("http://localhost:2000/api/users/register", {
        accountNumber: user.accountNumber, // Account number first
        name: user.name,
        email: user.email,
        password: user.password,
      });

      // Handle successful response
      setMessage("Registration successful! Redirecting to login...");

      // Reset the form after successful registration
      setUser({
        accountNumber: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/Custlogin"; // Redirect to login page
      }, 2000);
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        // Server responded with an error
        setMessage(`Error: ${error.response.data.message || error.response.data}`);
      } else if (error.request) {
        // No response from the server
        setMessage("Error: No response from the server.");
      } else {
        // Something went wrong in setting up the request
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="customer-signup-container">
      <div className="customer-signup-card">
        <h1 className="customer-signup-title">Customer Sign Up</h1>
        {message && <div className="error-message">{message}</div>}
        <form className="customer-signup-form" onSubmit={handleSubmit}>
          {/* Account Number First */}
          <div className="customer-input-group">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              value={user.accountNumber}
              onChange={handleChange}
              placeholder="Enter your account number"
              required
            />
            {errors.accountNumber && (
              <small className="validation-error">{errors.accountNumber}</small>
            )}
          </div>

          <div className="customer-input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            {errors.name && <small className="validation-error">{errors.name}</small>}
          </div>
          <div className="customer-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            {errors.email && <small className="validation-error">{errors.email}</small>}
          </div>
          <div className="customer-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
            {errors.password && (
              <small className="validation-error">{errors.password}</small>
            )}
          </div>
          <div className="customer-input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
            {errors.confirmPassword && (
              <small className="validation-error">{errors.confirmPassword}</small>
            )}
          </div>

          <button type="submit" className="customer-signup-btn">
            Sign Up
          </button>
          <p className="customer-login-redirect">
            Already have an account?{" "}
            <a href="/Custlogin" className="customer-login-link">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CustomerSignUp;
