import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">VergelDev</div>

      {/* Botón de menú hamburguesa */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menú principal */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Inicio</NavLink>
        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Proyectos</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contacto</NavLink>
      </div>

      {/* Redes sociales */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;




