import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">
        <NavLink to="/" className="logo2">Plexus Restaurant</NavLink>
      </h1>
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Home</NavLink>
        <NavLink to="/menu" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Menu</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Contact</NavLink>
      </nav>
    </header>
  );
}