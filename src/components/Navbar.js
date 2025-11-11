// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import EnquiryModal from './EnquiryModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  // 1) Listen for scroll, flip `scrolled` once past 50px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar-header glassy ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-bar flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
        <div className="logo-section flex items-center gap-4">
          <img
            src={process.env.PUBLIC_URL + "/logo.jpg"}
            alt="JK industries"
            className="logo-img rounded-full shadow-lg border-4 border-white/40 w-16 h-16 md:w-20 md:h-20 object-cover"
          />
          <div className="flex flex-col gap-1">
            <h1 className="company-name text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-teal-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">JK Industries</h1>
            <p className="ISO: text-xs md:text-sm text-gray-700 font-medium tracking-wide">An ISO 9001: 2015 certified company</p>
            <p className="company-location text-xs md:text-sm text-gray-600">
              📍 <a
                href="https://maps.app.goo.gl/LvevcN4aYGmtadqKA"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link underline decoration-teal-400 hover:text-teal-600 transition-colors"
              >
                MIDC Malegaon, Sinnar Dist, Nasik, Maharashtra
              </a>
            </p>
            <p className="company-gst text-xs md:text-sm text-gray-600">
              ✔ GST No. <strong className="text-teal-700">27AZUPK4892K1ZD</strong>
            </p>
          </div>
        </div>
        <div className="header-buttons flex gap-3 items-center">
          <a href="tel:8275019040" className="call-button px-4 py-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
            📞 Call 8275019040
          </a>
          <a
            className="enquiry-button px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
            href="https://docs.google.com/forms/d/1OmMqayDjRAQpfI6hhIZlGiMLaGtcmBOdEdQNdw6R3kM/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            📩 Send Enquiry
          </a>
          {/* Mobile menu button */}
          <button
            className="mobile-menu-button md:hidden px-3 py-2 rounded-lg bg-white/60 shadow border border-gray-300 hover:bg-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-1 bg-gray-700 mb-1 rounded"></span>
            <span className="block w-6 h-1 bg-gray-700 mb-1 rounded"></span>
            <span className="block w-6 h-1 bg-gray-700 rounded"></span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`main-nav ${menuOpen ? 'open' : ''}`}>
        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
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

  {/* Enquiry Modal removed for Google Form integration */}
    </header>
  );
}
