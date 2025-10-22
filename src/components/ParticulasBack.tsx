"use client";
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import TextAnimado from "./TextAnimado";
import { motion } from "framer-motion";
import "./ParticulasBack.css"; // Importa tu CSS personalizado

const ParticulasBack: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fullScreen: { enable: false },
      fpsLimit: 120,
      interactivity: {
        events: { onClick: { enable: false }, onHover: { enable: false } },
      },
      particles: {
        color: { value: "#f89651" },
        links: {
          color: "#f89651",
          distance: 200,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: { value: 60, density: { enable: false, area: 800 } },
        opacity: { value: 0.8 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="hero-container">
      {/* Fondo de partículas */}
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="hero-particles"
      />

      {/* Contenido principal */}
      <section className="hero-content">
        <div className="hero-text">

         <h1 className="hero-title">
            <TextAnimado
              text={`Hola, soy <span class="highlight">Gustavo Vergel Arellano</span>`}
              effect="typewriter"
              color="#1a1a1a"
              fontSize="2.5rem"
              duration={2}
              showCursor={true}
              cursorColor="#f89651"
              delay={0}
            />
          </h1>

          <TextAnimado
            text="Analista de Datos & Ingeniero de Software"
            effect="typewriter"
            color="#1a1a1a"
            fontSize="1.5rem"
            duration={2}
            showCursor={true}
            cursorColor="#f89651"
            delay={3}
          />
          <p className="hero-description">
          <TextAnimado
            text={`Me apasiona transformar datos en decisiones inteligentes,\ncreando soluciones web funcionales, seguras y visualmente atractivas.`}
            effect="motion-typewriter"
            color="#000000"
            fontSize="1.3rem"
            duration={6}
            delay={6}
            
          />
        </p>

          <p className="hero-description">
          <TextAnimado
            text={`💬 ¡Hablemos! Estoy aquí para escucharte y crear juntos algo genial.`}
            effect="motion-typewriter"
            color="#000000"
            fontSize="1.3rem"
            duration={5}
            delay={6}
            
          />
        </p>

          <div className="hero-buttons">
            <a href="../public/assets/GustavoVergelCV2025.pdf" download className="btn btn-primary">
              Descargar CV
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-vergel-67915170/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>

             <a
              href="https://wa.me/573014438307"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="hero-image"
        >
          <img
            src="assets/perfil2.jpg"
            alt="Foto de Gustavo Vergel"
            className="profile-image"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default ParticulasBack;
