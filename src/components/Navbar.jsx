import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
    <nav className="navbar">
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">
          <img src="./logo-tumpul.png" alt="The Tumpul's Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </div>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/about.html" className={({ isActive }) => (isActive ? 'active' : '')}>About We</NavLink>
        <NavLink to="/price-list.html" className={({ isActive }) => (isActive ? 'active' : '')}>Price List</NavLink>
        <NavLink to="/work.html" className={({ isActive }) => (isActive ? 'active' : '')}>Our Works</NavLink>
        <NavLink to="/contact.html" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>
      <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn-connect desktop-btn" onClick={() => window.open('https://wa.me/6285781021417', '_blank')}>Hire Now</button>
          
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
      </div>
    </nav>
    
    {/* Mobile Menu Overlay */}
    <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-menu-btn" onClick={toggleMobileMenu}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        <div className="mobile-nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about.html">About We</NavLink>
            <NavLink to="/price-list.html">Price List</NavLink>
            <NavLink to="/work.html">Our Works</NavLink>
            <NavLink to="/contact.html">Contact</NavLink>
            <button className="btn-connect" onClick={() => window.open('https://wa.me/6285781021417', '_blank')} style={{ marginTop: '2rem' }}>Hire Now</button>
        </div>
    </div>
    </>
  );
};

export default Navbar;
