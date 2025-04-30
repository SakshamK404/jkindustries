// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 1) Listen for scroll, flip `scrolled` once past 50px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo-section">
          <img
            src={process.env.PUBLIC_URL + "/logo.jpg"}
            alt="JK industries"
            className="logo-img"
          />
          <div>
            <h1 className="company-name">JK Industries</h1>
            <p className="company-location">
              📍 MIDC Malegaon,Sinnar Dist, Nasik, Maharashtra.
            </p>
            <p className="company-gst">
              ✔ GST No. <strong>27AZUPK4892K1ZD</strong>
            </p>
          </div>
        </div>
        <div className="header-buttons">
          <a href="tel:8275019040" className="call-button">
            📞 Call 8275019040
          </a>
          <button className="enquiry-button">📩 Send Enquiry</button>
          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* simple hamburger */}
            <svg width="24" height="24" fill="none" stroke="currentColor">
              <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`main-nav ${menuOpen ? 'open' : ''}`}>
        <nav className="nav-links">
          <Link to="/" className="nav-home" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link
            to="/company-brief"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            COMPANY BRIEF
          </Link>
        </nav>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Products/Services"
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
      </div>
    </header>
  );
}
