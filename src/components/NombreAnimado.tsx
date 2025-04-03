import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NombreAnimado = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverDirection, setHoverDirection] = useState("right");

  // Detecta si el usuario está en un móvil
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLHeadingElement>) => {
    if (isMobile) return; // No ejecutar en móviles

    const { clientX, target } = event;
    const { left, width } = (target as HTMLElement).getBoundingClientRect();
    const middle = left + width / 2;

    setHoverDirection(clientX < middle ? "left" : "right");
  };

  return (
    <motion.h1
      className="text-2xl md:text-5xl font-bold text-orange-500 text-center md:text-left"
      initial={{ opacity: 0, y: -20 }}
      animate={
        isMobile
          ? { opacity: 1, y: [0, -5, 0] } // Oscilación automática en móviles
          : { opacity: 1, y: 0 }
      }
      transition={
        isMobile
          ? { duration: 2, repeat: Infinity, repeatType: "reverse" }
          : { duration: 1 }
      }
      whileHover={
        !isMobile
          ? hoverDirection === "right"
            ? { scale: 1.1, rotate: 5, color: "#FF8C00" } // Si pasa a la derecha
            : { scale: 1.1, rotate: -5, color: "#FFD700" } // Si pasa a la izquierda
          : undefined
      }
      onMouseMove={handleMouseMove}
    >
      Gustavo de Jesus Vergel Arellano
    </motion.h1>
  );
};

export default NombreAnimado;
