"use client";
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import NombreAnimado from "./NombreAnimado";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticulasBack = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fullScreen: { enable: false },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: false, mode: "push" },
          onHover: { enable: false, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 300, duration: 0.6 },
        },
      },
      particles: {
        color: { value: "rgb(248, 150, 81)" },
        links: {
          color: "rgb(248, 150, 81)",
          distance: 250,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 1.6,
          straight: false,
        },
        number: {
          density: { enable: false, area: 600 },
          value: 60,
        },
        opacity: { value: 0.8 },
        shape: { type: "polygon" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="particulas-container">
      {/* Partículas en el fondo */}
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="particulas-fondo"
      />

      {/* Contenido encima */}
      <section className="section-uno relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-4 text-center md:text-left">
        <div className="texto">
          <h1>ANALISTA & INGENIERO DE SOFTWARE</h1>
          <br />
          <h3>
            Apasionado, Me gusta codificar y solucionar cosas funcionales pero maravillosas
          </h3>
          <br />
          <div>
            <NombreAnimado />
          </div>
          <br />
          <h3>DISEÑO & DESARROLLO WEB</h3>
          <br />
          <h3>ANALISIS DE DATOS</h3>
        </div>

        <div className="imagen">
          <img
            src="assets/perfilghibli.png"
            alt="developer"
          />
        </div>
      </section>

     
    </div>
  );
};

export default ParticulasBack;


