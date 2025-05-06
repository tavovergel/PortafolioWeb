import { motion } from "framer-motion";
import { useState } from "react";

const styles = {
  text: {
    fontSize: "3.4rem", // Tamaño del texto
    fontWeight: "bold", // Negrita
  },
};

const NombreAnimado = () => {
  const [hoverDirection, setHoverDirection] = useState("right");

  const handleMouseMove = (event: React.MouseEvent<HTMLHeadingElement>) => {
    const { clientX, target } = event;
    const { left, width } = (target as HTMLElement).getBoundingClientRect();
    const middle = left + width / 2;

    if (clientX < middle) {
      setHoverDirection("left");
    } else {
      setHoverDirection("right");
    }
  };

  return (
    <motion.h1
      style={styles.text}
      className="text-4xl md:text-6xl font-bold text-orange-500"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={
        hoverDirection === "right"
          ? { scale: 1.1, rotate: 5, color: "#FF8C00" } // Si pasa a la derecha
          : { scale: 1.1, rotate: -5, color: "#d2691e" } // Si pasa a la izquierda
      }
      onMouseMove={handleMouseMove}
    >
      Gustavo de Jesus Vergel Arellano
    </motion.h1>
  );
};

export default NombreAnimado;
