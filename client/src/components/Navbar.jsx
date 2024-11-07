import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '/logo.png'; // Ensure the path to your logo is correct
import './Navbar.css'; // Import the CSS file

// Dropdown Arrow SVG
const DropdownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 16 16"
    fill="currentColor"
    style={{ marginLeft: '5px' }} // Add margin to space out the icon
  >
    <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.793l2.646-3.147a.5.5 0 1 1 .708.708l-3 3.5a.5.5 0 0 1-.708 0l-3-3.5a.5.5 0 0 1 0-.708z" />
  </svg>
);

// Hamburger Icon SVG
const HamburgerIcon = ({ onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="hamburger-icon"
  >
    <path d="M2 2h12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm0 6h12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm0 6h12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
  </svg>
);

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu visibility

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false); // Close mobile menu
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo that navigates to the home page */}
      <NavLink to="/" className="logo">
        <img src={Logo} alt="Company Logo" />
      </NavLink>

      {/* Hamburger icon for mobile */}
      <HamburgerIcon onClick={toggleMobileMenu} />

      {/* Navbar items */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Services with dropdown */}
        <li>
          <NavLink to="#" onClick={() => toggleDropdown('services')}>
            Services
            <DropdownArrow />
          </NavLink>
          {activeDropdown === 'services' && (
            <ul className="dropdown">
              <li>
                <strong>Setup</strong>
                <ul className="flex-dropdown"> {/* Flex layout for Setup */}
                  <li><NavLink to="/services/llc">Form an LLC</NavLink></li>
                  <li><NavLink to="/services/ein">EIN (Employer Identification Number)</NavLink></li>
                  <li><NavLink to="/services/licenses">Licenses & Permits</NavLink></li>
                  <li><NavLink to="/services/sales-tax">Sales Tax Permit</NavLink></li>
                  <li><NavLink to="/services/business-insurance">Business Insurance</NavLink></li>
                  <li><NavLink to="/services/business-banking">Business Banking</NavLink></li>
                  <li><NavLink to="/services/logo-maker">Logo Maker</NavLink></li>
                  <li><NavLink to="/services/domain">Domain</NavLink></li>
                  <li><NavLink to="/services/website">Website</NavLink></li>
                  <li><NavLink to="/services/business-email">Business Email</NavLink></li>
                </ul>
              </li>
              <li>
                <strong>Manage</strong>
                <ul className="flex-dropdown"> {/* Flex layout for Manage */}
                  <li><NavLink to="/services/boi-report">BOI Report</NavLink></li>
                  <li><NavLink to="/services/federal-taxes-accounting">Federal Taxes & Accounting</NavLink></li>
                  <li><NavLink to="/services/sales-tax-payroll-taxes">Sales Tax and Payroll Taxes</NavLink></li>
                  <li><NavLink to="/services/corporate-kit">Corporate Kit</NavLink></li>
                  <li><NavLink to="/services/trademark">Trademark</NavLink></li>
                  <li><NavLink to="/services/dbas">DBAs</NavLink></li>
                  <li><NavLink to="/services/change-registered-agent">Change a Registered Agent</NavLink></li>
                  <li><NavLink to="/services/articles-of-amendment">Articles of Amendment</NavLink></li>
                  <li><NavLink to="/services/entity-conversions-domestication">Entity Conversions and Domestication (LLCs & Corps)</NavLink></li>
                  <li><NavLink to="/services/foreign-qualifications">Foreign Qualifications</NavLink></li>
                  <li><NavLink to="/services/reinstatements">Reinstatements</NavLink></li>
                  <li><NavLink to="/services/articles-of-dissolution">Articles of Dissolution (Close a Business)</NavLink></li>
                  <li><NavLink to="/services/business-name-change">Business Name Change</NavLink></li>
                  <li><NavLink to="/services/irs-assistance">Various IRS Assistance</NavLink></li>
                  <li><NavLink to="/services/501c3-filings">501c3 Filings</NavLink></li>
                </ul>

              </li>
            </ul>
          )}
        </li>

        {/* Resources with dropdown */}
        <li>
          <NavLink to="#" onClick={() => toggleDropdown('resources')}>
            Resources
            <DropdownArrow />
          </NavLink>
          {activeDropdown === 'resources' && (
            <ul className="dropdown">
              <li><NavLink to="/resources/blogs">Blogs</NavLink></li>
              <li><NavLink to="/resources/faqs">FAQs</NavLink></li>
            </ul>
          )}
        </li>

        {/* Why CorpValet with dropdown */}
        <li>
          <NavLink to="#" onClick={() => toggleDropdown('whyCorpValet')}>
            Why CorpValet
            <DropdownArrow />
          </NavLink>
          {activeDropdown === 'whyCorpValet' && (
            <ul className="dropdown">
              <li><NavLink to="/why/about">About</NavLink></li>
              <li><NavLink to="/why/reviews">Reviews</NavLink></li>
            </ul>
          )}
        </li>

        {/* Regular links without dropdowns */}
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/consultation" className="free-consultation"id='freeone'>Free Consultation</NavLink></li>
        <li><NavLink to="/get-started" className="free-consultation"id='freetwo'>Get Started</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
