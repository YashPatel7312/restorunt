import { NavLink } from "react-router-dom";
import "../App.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <h1 className="logo">
        <NavLink to="/" className="logo2">
          Plexus Restaurant
        </NavLink>
      </h1>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        {/* Plexus Restaurant inside dropdown (clickable + closes menu) */}
        <NavLink 
          to="/" 
          className="dropdown-logo"
          onClick={() => setIsOpen(false)}
        >
          Plexus Restaurant
        </NavLink>

        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"} 
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink 
          to="/menu" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"} 
          onClick={() => setIsOpen(false)}
        >
          Menu
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"} 
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"} 
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
