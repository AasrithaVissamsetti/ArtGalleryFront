import React from "react";
import "./CuratorSide.css";

const CuratorSideNavbar = () => {
  const handleLogout = () => {
    // Clear curator session and redirect to login page
    localStorage.removeItem("curatorEmail");
    window.location.href = "/"; // Redirect to login page
  };

  return (
    <div className="curator-sidebar">
      <h2 className="curator-sidebar-title">Curator Menu</h2>
      <ul className="curator-sidebar-links">
        <li>
          <a href="/CuratorHome" className="curator-sidebar-link">Home</a>
        </li>
        <li>
          <a href="/ManageExhibitions" className="curator-sidebar-link">Manage Exhibitions</a>
        </li>
        <li>
          <a href="/CuViewArtists" className="curator-sidebar-link">View Artists</a>
        </li>
        <li>
          <a href="/ManageArtworks" className="curator-sidebar-link">Manage Artworks</a>
        </li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default CuratorSideNavbar;
