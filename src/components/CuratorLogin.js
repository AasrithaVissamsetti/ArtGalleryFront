import React, { useState } from "react";
import axios from "axios";
import "./CuratorLogin.css"; // Add your CSS file

const CuratorLogin = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // State for validation errors

  // Handle input change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });

    // Inline validation
    if (e.target.id === "name") {
      if (e.target.value.length < 3) {
        setErrors((prev) => ({ ...prev, name: "Name must be at least 3 characters" }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }

    if (e.target.id === "password") {
      if (e.target.value.length < 6) {
        setErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters" }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for validation errors before making the API call
    if (!user.name || !user.password) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (errors.name || errors.password) {
      setMessage("Please fix validation errors before proceeding.");
      return;
    }

    try {
      // Make API call for login
      const response = await axios.post("http://localhost:2000/api/curators/login", {
        name: user.name,
        password: user.password,
      });

      setMessage(response.data); // Display response message

      // If login is successful
      if (response.data === "Login successful!") {
        localStorage.setItem("curatorName", user.name); // Save name in localStorage

        // Redirect to CuratorHome
        setTimeout(() => {
          window.location.href = "/CuratorHome";
        }, 2000);
      }
    } catch (error) {
      // Handle error
      if (error.response) {
        setMessage(`Error: ${error.response.data}`);
      } else if (error.request) {
        setMessage("Error: No response from the server.");
      } else {
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="curator-login-container">
      <div className="curator-login-card">
        <h1 className="curator-login-title">Curator Login</h1>
        {message && <div className="error-message">{message}</div>}
        <form className="curator-login-form" onSubmit={handleSubmit}>
          <div className="curator-input-group">
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
          <div className="curator-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            {errors.password && <small className="validation-error">{errors.password}</small>}
          </div>
          <button type="submit" className="curator-login-btn">
            Login
          </button>
          <p className="curator-signup-redirect">
            Don't have an account?{" "}
            <a href="/CuratorSignup" className="curator-signup-link">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CuratorLogin;
