import React from "react";
import "./AdminSideNavbar.css";

const AdminSideNavbar = () => {
  const handleLogout = () => {
    // Clear admin session and redirect to login page
    localStorage.removeItem("adminName");
    window.location.href = "/AdminLogin"; // Redirect to the admin login page
  };

  return (
    <div className="admin-sidebar">
      <h2 className="admin-sidebar-title">Admin Menu</h2>
      <ul className="admin-sidebar-links">
        <li>
          <a href="/AdminHome" className="admin-sidebar-link">Home</a>
        </li>
        <li>
          <a href="/AdminUserManagement" className="admin-sidebar-link">Manage Users</a>
        </li>
        <li>
          <a href="/ViewReports" className="admin-sidebar-link">View Reports</a>
        </li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AdminSideNavbar;
