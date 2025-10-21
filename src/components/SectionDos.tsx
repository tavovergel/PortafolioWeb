import React from "react";
import "./SectionDos.css";

const SectionDos: React.FC = () => {
  return (
    <section className="section-dos">
      {/* Luz animada */}
      <div className="decorative-light"></div>

      {/* Líneas decorativas */}
      <div className="decorative-lines">
        <img src="/background-lines.svg" alt="" />
      </div>

      <div className="section-dos-container">
        {/* Imagen personal */}
        <div className="photo-container">
          <img
            src="../public/assets/perfil2.jpg" // 👈 reemplázala por tu imagen (colócala en public/)
            alt="Foto personal"
            className="profile-photo"
          />
        </div>

        {/* Contenido de texto */}
        <div className="section-content">
          <h2>Hola, ¡Mucho gusto!</h2>

          <p>
            Desde que comencé en el mundo de la tecnología, he aprendido que cada día
            trae una nueva oportunidad para fortalecer habilidades. Cada reto representa
            una ocasión para crecer, resolver problemas y aportar soluciones con impacto real.
            Estoy listo para ayudarte a construir algo innovador y funcional.
          </p>

          <p className="highlight">
            💬 ¡Hablemos! Estoy aquí para escucharte y crear juntos algo genial.
          </p>

          <a
            href="https://wa.me/573001234567?text=¡Hola!%20Estoy%20interesado%20en%20conocer%20más%20sobre%20tu%20trabajo."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            💬 Contactar por WhatsApp
          </a>
        </div>
      </div>

      {/* Onda inferior */}
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="rgba(255,255,255,0.4)"
          d="M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,112C672,96,768,128,864,138.7C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256V320H0Z"
        ></path>
      </svg>
    </section>
  );
};

export default SectionDos;
