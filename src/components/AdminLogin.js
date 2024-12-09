import React, { useState } from "react";
import axios from "axios";
import "./AdminLogin.css"; // Add your CSS file

const AdminLogin = () => {
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // State for validation errors

  // Handle input change
  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.id]: e.target.value,
    });
  };

  // Inline validation
  const validateInput = (field, value) => {
    if (field === "username") {
      if (value.length < 3) {
        return "Username must be at least 3 characters";
      }
    }
    if (field === "password") {
      if (value.length < 6) {
        return "Password must be at least 6 characters";
      }
    }
    return ""; // No error
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const usernameError = validateInput("username", admin.username);
    const passwordError = validateInput("password", admin.password);

    if (usernameError || passwordError) {
      setErrors({
        username: usernameError,
        password: passwordError,
      });
      setMessage("Please fix validation errors before proceeding.");
      return;
    }

    try {
      // Make API call for login
      const response = await axios.post(
        "http://localhost:2000/api/admins/login", // Your API endpoint
        {
          username: admin.username,
          password: admin.password,
        }
      );

      setMessage(response.data); // Display response message

      // If login is successful
      if (response.data === "Login successful!") {
        localStorage.setItem("adminUsername", admin.username); // Save username in localStorage

        // Redirect to AdminHome
        setTimeout(() => {
          window.location.href = "/AdminHome";
        }, 2000);
      }
    } catch (error) {
      // Handle error
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
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h1 className="admin-login-title">Admin Login</h1>
        {message && <div className="error-message">{message}</div>}
        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div className="admin-input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={admin.username}
              onChange={handleChange}
              onBlur={(e) => setErrors((prev) => ({
                ...prev,
                username: validateInput("username", e.target.value)
              }))} // Validation on blur
              placeholder="Enter your username"
              required
            />
            {errors.username && (
              <small className="validation-error">{errors.username}</small>
            )}
          </div>
          <div className="admin-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={admin.password}
              onChange={handleChange}
              onBlur={(e) => setErrors((prev) => ({
                ...prev,
                password: validateInput("password", e.target.value)
              }))} // Validation on blur
              placeholder="Enter your password"
              required
            />
            {errors.password && (
              <small className="validation-error">{errors.password}</small>
            )}
          </div>
          <button type="submit" className="admin-login-btn">
            Login
          </button>
          <p className="admin-signup-redirect">
            Don't have an account?{" "}
            <a href="/AdminSignup" className="admin-signup-link">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
