import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav  className="navbar">
      {/* Logo */}
      <div className="logo">Vergel<span>Dev</span></div>

      {/* Menú hamburguesa (solo en móvil) */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Enlaces */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <a href="#Home" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;




