import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Importa los estilos globales
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Importa los iconos

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">MiLogo</div>

      {/* Menú */}
      <div className="menu">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Inicio</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Proyectos</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contacto</NavLink>
      </div>

      {/* Redes Sociales */}
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



