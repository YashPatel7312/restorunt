import { NavLink } from "react-router-dom";
import "../App.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); // close menu on desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      {/* ✅ Logo always visible */}
      <h1 className="logo">
        <NavLink to="/" className="logo2">
          Plexus Restaurant
        </NavLink>
      </h1>

      {/* Hamburger for mobile */}
      {isMobile && (
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {/* Nav links */}
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-btn active" : "nav-btn")}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "nav-btn active" : "nav-btn")}
          onClick={() => setIsOpen(false)}
        >
          Menu
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-btn active" : "nav-btn")}
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "nav-btn active" : "nav-btn")}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
