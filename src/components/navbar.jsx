import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './navbar.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLoginDropdown = () => setIsLoginDropdownOpen(!isLoginDropdownOpen);
  const toggleSignUpDropdown = () => setIsSignUpDropdownOpen(!isSignUpDropdownOpen);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-logo">
        <a href="/">ArtGallery</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="/Aboutus">About Us</a></li>
        <li><a href="/Contactus">Contact</a></li>
      </ul>
      <div className="navbar-buttons">
        {/* Login Dropdown */}
        <div className={`dropdown ${isLoginDropdownOpen ? 'open' : ''}`}>
          <button className="btn login-btn" onClick={toggleLoginDropdown}>Login</button>
          <div className="dropdown-content">
            <Link to="/Custlogin">Customer</Link> {/* Use Link instead of href */}
            <a href="/CuratorLogin">Curator</a>
            <a href="/AdminLogin">Admin</a>
          </div>
        </div>

        {/* Sign Up Dropdown */}
        <div className={`dropdown ${isSignUpDropdownOpen ? 'open' : ''}`}>
          <button className="btn signup-btn" onClick={toggleSignUpDropdown}>Sign Up</button>
          <div className="dropdown-content">
            <Link to="/CustSignup">Customer</Link> {/* Use Link instead of href */}
            <a href="/CuratorSignup">Curator</a>
            <a href="/AdminSignup">Admin</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
