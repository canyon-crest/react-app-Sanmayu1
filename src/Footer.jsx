
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {}
        <p>&copy; {new Date().getFullYear()}, My Website</p>
        <nav>
          <a href="/about" className="footer-link">About</a>
          <a href="/contact" className="footer-link">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

