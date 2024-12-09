import React from 'react';
import './Footer.css'; // Make sure to add the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faPinterest, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section newsletter">
        <h3>Join Our Newsletter</h3>
        <p>Sign up to receive awesome content</p>
        <input type="email" placeholder="Your email address" />
        <button>Let's keep in touch</button>
      </div>
      <div className="footer-section categories">
        <h3>Categories</h3>
        <ul>
          <li>Artists</li>
          <li>Paintings</li>
          <li>Sculpture</li>
          <li>Print</li>
          <li>Traditional Arts</li>
        </ul>
      </div>
      <div className="footer-section links">
        <h3>Useful Links</h3>
        <ul>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Shipping Policy</li>
          <li>Return Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div className="footer-section contact-info">
        <h3>Contact Info</h3>
        <p>📞 70218 31385</p>
        <p>📧 info@artgallery.com</p>
        <p>📍  Art Gallery, 12,<br />
              Mumbai - 400 013, India.<br />
        </p>
        <div className="social-icons">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterest} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Art Gallery. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;