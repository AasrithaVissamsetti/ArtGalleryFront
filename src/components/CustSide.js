import React from "react";
import "./CustSide.css";

const SideNavbar = () => {
  const handleLogout = () => {
    // Clear user session and redirect to login page
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Customer Menu</h2>
      <ul className="sidebar-links">
        <li>
          <a href="/CustHome" className="sidebar-link">Home</a>
        </li>
        <li>
          <a href="/viewArtists" className="sidebar-link">View Artists</a>
        </li>
        <li>
          <a href="/viewArtworks" className="sidebar-link">View Artworks</a>
        </li>
        <li>
          <a href="/Exhibition" className="sidebar-link">View Exhibitions</a>
        </li>
        <li>
          <a href="/AddCart" className="sidebar-link">Add to Cart</a>
        </li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default SideNavbar;
