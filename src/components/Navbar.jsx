import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.toLowerCase().startsWith(path.toLowerCase())) return true;
    return false;
  };

  const isHome = location.pathname === '/' || location.pathname === '/Home';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHome ? 'on-hero' : 'solid-nav'}`}>
      <div className="navbar-container">
        {/* Logo / Brand Info */}
        <Link to="/" className="navbar-logo-area">
          <img src="/logo.png" alt="SVP Logo" className="navbar-logo-img" />
          <div className="navbar-logo-text">
            <div className="navbar-logo-title-row">
              <span className="navbar-logo-title">Sri Vasavi Plywood &amp; Hardware</span>
              <span className="badge-years">28+ Years</span>
            </div>
            <span className="navbar-logo-subtitle">Premium Wood Solutions</span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <div className="navbar-menu-desktop">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>Products</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className="btn btn-primary nav-contact-btn">Contact Us</Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="navbar-mobile-links">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/products" className={`mobile-nav-link ${isActive('/products') ? 'active' : ''}`}>Products</Link>
          <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className="btn btn-primary mobile-contact-btn">Contact Us</Link>

          <div className="mobile-menu-contacts">
            <a href="tel:9842438037" className="mobile-contact-item">
              <Phone size={18} />
              <span>Call: 98424 38037</span>
            </a>
            <a href="https://wa.me/919003848037" target="_blank" rel="noopener noreferrer" className="mobile-contact-item wa">
              <MessageCircle size={18} />
              <span>WhatsApp: 90038 48037</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
