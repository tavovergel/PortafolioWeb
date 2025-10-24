"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import "./CertificationSection.css";
import items from "../data/certificaciones.json";

interface NewsItem {
  title: string;
  description: string;
  date: string;
  image: string;
  link?: string;
}

const CertificationSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil (solo en cliente)
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile(); // ejecutar al montar
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = useMemo(() => Math.max(0, items.length - itemsPerView), [items.length, itemsPerView]);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section className="news-section-dark">
      <motion.h2
        className="news-title-dark"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Noticias y Certificaciones
      </motion.h2>

      <motion.p
        className="news-subtitle-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Actualizaciones recientes sobre mi crecimiento profesional y nuevos proyectos.
      </motion.p>

      <div className="slider-container-dark">
        {/* Flecha izquierda */}
        <button
          className="slider-arrow-dark slider-arrow-left"
          onClick={handlePrev}
          aria-label="Anterior"
          disabled={currentIndex === 0}
          aria-hidden={currentIndex === 0}
        >
          ‹
        </button>

        {/* Carrusel */}
        <div className="slider-wrapper-dark">
          <motion.div
            className="news-grid-dark"
            animate={{
              x: isMobile
                ? `-${currentIndex * 100}%`
                : `-${currentIndex * (100 / 3)}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {items.map((item: NewsItem, index: number) => (
              <div key={index} className="news-card-dark">
                <img
                  src={item.image}
                  alt={item.title}
                  className="news-image-dark"
                  loading="lazy"
                />
                <div className="news-content-dark">
                  <h3>{item.title}</h3>
                  <p className="news-date-dark">{item.date}</p>
                  <p className="news-desc-dark">{item.description}</p>
                  
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Flecha derecha */}
        <button
          className="slider-arrow-dark slider-arrow-right"
          onClick={handleNext}
          aria-label="Siguiente"
          disabled={currentIndex >= maxIndex}
          aria-hidden={currentIndex >= maxIndex}
        >
          ›
        </button>
      </div>

      {/* Indicadores */}
      {items.length > itemsPerView && (
        <div className="slider-dots-dark">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`slider-dot-dark ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a la página ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CertificationSection;
