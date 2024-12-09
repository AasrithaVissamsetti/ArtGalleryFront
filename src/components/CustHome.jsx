import React, { useState, useEffect } from "react";
import "./CustHome.css";
import CustSide from "./CustSide"; // Sidebar component

const CustomerHome = () => {
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email); // Set the email to display welcome message
    } else {
      setMessage("No user found. Please log in.");
    }
  }, []); // Run only once on component mount

  const handleLogout = () => {
    localStorage.removeItem("userEmail"); // Clear user session
    window.location.href = "/"; // Redirect to login page
  };

  return (
    <div className="customer-home-page">
        <CustSide/>
      <div className="customer-home-content">
        {message && <div className="error-message">{message}</div>}
        {userEmail && (
          <div className="customer-home-card">
            <h1 className="customer-home-title">Welcome, {userEmail}!</h1>
            <p className="customer-home-description">
              We're glad to have you back. Explore our products and services.
            </p>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerHome;
