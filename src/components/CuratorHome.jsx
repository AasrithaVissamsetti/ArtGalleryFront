import React, { useState, useEffect } from "react";
import "./CuratorHome.css";  // Add the appropriate CSS file for the Curator Home
import CuratorSideNavbar from "./CuratorSide"; // Sidebar component for curator

const CuratorHome = () => {
  const [message, setMessage] = useState("");
  const [curatorName, setCuratorName] = useState("");

  // This useEffect runs when the component mounts
  useEffect(() => {
    const name = localStorage.getItem("curatorName"); // Get the curator's name from localStorage
    if (name) {
      setCuratorName(name); // Set the name to display welcome message
    } else {
      setMessage("No curator found. Please log in.");
    }
  }, []); // Run only once when the component mounts

  const handleLogout = () => {
    localStorage.removeItem("curatorName"); // Clear the curator session
    window.location.href = "/CuratorLogin"; // Redirect to login page
  };

  return (
    <div className="curator-home-page">
      <CuratorSideNavbar /> {/* Sidebar for curator */}
      <div className="curator-home-content">
        {message && <div className="error-message">{message}</div>}
        {curatorName && (
          <div className="curator-home-card">
            <h1 className="curator-home-title">Welcome, {curatorName}!</h1>
            <p className="curator-home-description">
              We're glad to have you back. Manage your curators and collections.
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

export default CuratorHome;
