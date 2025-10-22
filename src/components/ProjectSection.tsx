import React from "react";
import { motion } from "framer-motion";
import "./ProSection.css";

interface Project {
  title: string;
  image: string;
  description: string;
  url: string;
  hoverTech?: string;
  hoverTag?: string;
}

const projects: Project[] = [
  {
    title: "Tickets para conciertos",
    image: "/assets/concierto.png",
    description: "Sistema de venta de tickets para eventos musicales.",
    url: "https://portafolio-web-three-alpha.vercel.app/",
    hoverTech: "Angular 19",
    hoverTag: "E-COMMERCE",
  },
  {
    title: "BIOTAR SAS",
    image: "/assets/biotar.png",
    description: "Sitio web corporativo para tratamiento de aguas residuales.",
    url: "https://biotarsk.com",
    hoverTech: "WordPress",
    hoverTag: "CORPORATIVO",
  },
  {
    title: "COUNTRYHOME",
    image: "/assets/country.jpeg",
    description: "Plataforma de ventas de lotes y terrenos.",
    url: "https://country-home.vercel.app/",
    hoverTech: "HTML, CSS, JavaScript",
    hoverTag: "VENTAS",
  },
];

const ProSection: React.FC = () => {
  const handleCardClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="portfolio-section">
      <motion.h2
        className="portfolio-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🚀 Proyectos Recientes
      </motion.h2>

      <motion.p
        className="portfolio-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Algunos de mis proyectos destacados.{" "}
        
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            onClick={() => handleCardClick(project.url)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="overlay-tech">{project.hoverTech}</div>
                <div className="overlay-tag">{project.hoverTag}</div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProSection;
