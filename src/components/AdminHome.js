import React, { useState, useEffect } from "react";
import "./AdminHome.css"; // Add the appropriate CSS file for Admin Home
import AdminSideNavbar from "./AdminSideNavbar"; // Sidebar component for admin

const AdminHome = () => {
  const [message, setMessage] = useState("");
  const [adminName, setAdminName] = useState("");

  // This useEffect runs when the component mounts
  useEffect(() => {
    const name = localStorage.getItem("adminUsername"); // Get the admin's name from localStorage
    if (name) {
      setAdminName(name); // Set the name to display the welcome message
    } else {
      setMessage("No admin found. Please log in.");
    }
  }, []); // Run only once when the component mounts

  const handleLogout = () => {
    localStorage.removeItem("adminName"); // Clear the admin session
    window.location.href = "/AdminLogin"; // Redirect to login page
  };

  return (
    <div className="admin-home-page">
      <AdminSideNavbar /> {/* Sidebar for admin */}
      <div className="admin-home-content">
        {message && <div className="error-message">{message}</div>}
        {adminName && (
          <div className="admin-home-card">
            <h1 className="admin-home-title">Welcome, {adminName}!</h1>
            <p className="admin-home-description">
              Manage your platform, users, and other administrative tasks efficiently.
            </p>
            <div className="admin-home-links">
              <a href="/ManageUsers" className="admin-home-link">
                Manage Users
              </a>
              <a href="/ViewReports" className="admin-home-link">
                View Reports
              </a>
              <a href="/SystemSettings" className="admin-home-link">
                System Settings
              </a>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
