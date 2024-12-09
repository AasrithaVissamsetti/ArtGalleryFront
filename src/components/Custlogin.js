import React, { useState } from "react";
import axios from "axios";
import "./Custlogin.css"; // Add your CSS file

const CustomerLogin = () => {
  const [user, setUser] = useState({
    email: "",
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
    if (e.target.id === "email") {
      if (!/\S+@\S+\.\S+/.test(e.target.value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
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
    if (!user.email || !user.password) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (errors.email || errors.password) {
      setMessage("Please fix validation errors before proceeding.");
      return;
    }

    try {
      // Make API call for login
      const response = await axios.post("http://localhost:2000/api/users/login", {
        email: user.email,
        password: user.password,
      });

      setMessage(response.data); // Display response message

      // If login is successful
      if (response.data === "Login successful!") {
        localStorage.setItem("userEmail", user.email); // Save email in localStorage

        // Redirect to CustomerHome
        setTimeout(() => {
          window.location.href = "/CustHome";
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
    <div className="customer-login-container">
      <div className="customer-login-card">
        <h1 className="customer-login-title">Customer Login</h1>
        {message && <div className="error-message">{message}</div>}
        <form className="customer-login-form" onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              required
            />
            {errors.password && <small className="validation-error">{errors.password}</small>}
          </div>
          <button type="submit" className="customer-login-btn">
            Login
          </button>
          <p className="customer-signup-redirect">
            Don't have an account?{" "}
            <a href="/CustSignup" className="customer-signup-link">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CustomerLogin;
