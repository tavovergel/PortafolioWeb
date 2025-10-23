"use client";

import React from "react";
import { motion } from "framer-motion";
import "./CertificationSection.css";

interface NewsItem {
  title: string;
  description: string;
  date: string;
  image: string;
  link?: string;
}

const items: NewsItem[] = [
  {
    title: "Certificación AWS Talento Tech",
    description:
      "Formación en Arquitectura en la Nube con AWS y la Universidad Sergio Arboleda.",
    date: "Marzo 2024",
    image: "/images/aws-certificado.jpg",
    link: "https://www.credly.com/",
  },
  {
    title: "Certificación Azure Fundamentals (AZ-900)",
    description:
      "Fundamentos de computación en la nube y servicios principales de Microsoft Azure.",
    date: "Febrero 2025",
    image: "/images/azure-cert.jpg",
  },
  {
    title: "Nuevo sitio web para Biotar S.A.S.",
    description:
      "Desarrollo completo y despliegue en Hostinger con optimización para SEO.",
    date: "Octubre 2024",
    image: "/images/biotar-web.jpg",
    link: "https://biotarsk.com",
  },
];

const CertificationSection: React.FC = () => {
  return (
    <section className="news-section-dark">
      <motion.h2
        className="news-title-dark"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Noticias y Certificaciones
      </motion.h2>

      <motion.p
        className="news-subtitle-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Actualizaciones recientes sobre mi crecimiento profesional y nuevos proyectos.
      </motion.p>

      <div className="news-grid-dark">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="news-card-dark"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.title} className="news-image-dark" />
            <div className="news-content-dark">
              <h3>{item.title}</h3>
              <p className="news-date-dark">{item.date}</p>
              <p className="news-desc-dark">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-link-dark"
                >
                  Ver más →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
