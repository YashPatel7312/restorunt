import { NavLink } from "react-router-dom";
import "../App.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <h1 className="logo">
        <NavLink to="/" className="logo2">Plexus Restaurant</NavLink>
      </h1>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Home</NavLink>
        <NavLink to="/menu" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Menu</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Contact</NavLink>
      </nav>
    </header>
  );
}
