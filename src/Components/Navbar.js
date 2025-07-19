import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronDown,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const toggleNav = () => setNav(!nav);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 font-medium">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center text-gray-700 text-[16px]">
          <li><Link to="/" className="hover:text-blue-700 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-700 transition">About Us</Link></li>

          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 hover:text-blue-700 transition">
              Services <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {showDropdown && (
              <ul className="absolute top-10 left-0 bg-white shadow-xl rounded-md w-56 py-2 z-50">
                <li><Link to="/treatment" className="block px-4 py-2 hover:bg-gray-100">Our Treatment</Link></li>
                <li><Link to="/facilities" className="block px-4 py-2 hover:bg-gray-100">Facilities & Technology</Link></li>

              </ul>
            )}
          </li>

          <li><Link to="/team" className="hover:text-blue-700 transition">Our Doctors Team</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-700 transition">Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-blue-700 transition">Contact</Link></li>

          {/* Appointment Button */}
          <Link
            to="/appointment"
            className="bg-blue-900 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <FontAwesomeIcon icon={faCommentDots} />
            Book Appointment
          </Link>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl text-blue-800" onClick={toggleNav}>
          <FontAwesomeIcon icon={nav ? faXmark : faBars} />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {nav && (
        <div className="md:hidden bg-white border-t px-4 py-5 space-y-5 text-gray-700 text-[15px] shadow-md z-40">
          <Link to="/" onClick={toggleNav} className="block">Home</Link>
          <Link to="/about" onClick={toggleNav} className="block">About Us</Link>

          <details className="group">
            <summary className="cursor-pointer flex justify-between items-center">
              <span>Services</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
            </summary>
            <ul className="pl-4 mt-2 space-y-2 text-gray-600">
              <li><Link to="/treatment" onClick={toggleNav}>Our Treatment</Link></li>
              <li><Link to="/facilities" onClick={toggleNav}>Facilities & Technology</Link></li>
            </ul>
          </details>

          <Link to="/team" onClick={toggleNav} className="block">Our Doctors Team</Link>
          <Link to="/gallery" onClick={toggleNav} className="block">Gallery</Link>
          <Link to="/contact" onClick={toggleNav} className="block">Contact</Link>

          {/* Appointment Button */}
          <Link
            to="/appointment"
            className="block text-white bg-blue-900 px-4 py-2 rounded text-center hover:bg-blue-700 transition"
            onClick={toggleNav}
          >
            <FontAwesomeIcon icon={faCommentDots} className="mr-2" />
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;





