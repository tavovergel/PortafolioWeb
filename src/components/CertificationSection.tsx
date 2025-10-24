"use client";

import React, { useState } from "react";
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
  
  // Detectar si es móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, items.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

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

      <div className="slider-container-dark">
        {/* Flecha Izquierda */}
        {currentIndex > 0 && (
          <button
            className="slider-arrow-dark slider-arrow-left"
            onClick={handlePrev}
            aria-label="Anterior"
          >
            ‹
          </button>
        )}

        {/* Contenedor del Slider */}
        <div className="slider-wrapper-dark">
          <motion.div
            className="news-grid-dark"
            animate={{
              x: isMobile 
                ? `-${currentIndex * 100}%` 
                : `-${currentIndex * (100 / 3)}%`
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {items.map((item: NewsItem, index: number) => (
              <motion.div
                key={index}
                className="news-card-dark"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={item.image} alt={item.title} className="news-image-dark" />
                <div className="news-content-dark">
                  <h3>{item.title}</h3>
                  <p className="news-date-dark">{item.date}</p>
                  <p className="news-desc-dark">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Flecha Derecha */}
        {currentIndex < maxIndex && (
          <button
            className="slider-arrow-dark slider-arrow-right"
            onClick={handleNext}
            aria-label="Siguiente"
          >
            ›
          </button>
        )}
      </div>

      {/* Indicadores */}
      {items.length > itemsPerView && (
        <div className="slider-dots-dark">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`slider-dot-dark ${index === currentIndex ? 'active' : ''}`}
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