"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type TextEffect = "typewriter" | "reveal" | "fade" | "motion-typewriter";

interface TextAnimadoProps {
  text: string;
  effect?: TextEffect;
  color?: string;
  duration?: number; // duración total en segundos
  showCursor?: boolean;
  cursorColor?: string;
  className?: string;
  delay?: number; // 🕐 nuevo: retraso antes de iniciar animación
}

const TextAnimado: React.FC<TextAnimadoProps> = ({
  text,
  effect = "typewriter",
  color = "#000000",
  duration = 2,
  showCursor = true,
  cursorColor = "#000000",
  className = "",
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState("");
  const timeoutsRef = useRef<number[]>([]);

  // 🔹 Efecto clásico de escritura (typewriter)
  useEffect(() => {
    if (effect !== "typewriter") return;
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];

    if (!text) {
      setDisplayText("");
      return;
    }

    const startTyping = () => {
      setDisplayText("");
      const safeDuration = Math.max(duration, 0.05);
      const charDelay = (safeDuration * 1000) / Math.max(text.length, 1);

      for (let i = 0; i < text.length; i++) {
        const t = window.setTimeout(() => {
          setDisplayText(text.slice(0, i + 1));
        }, Math.round(i * charDelay));
        timeoutsRef.current.push(t);
      }
    };

    // 🕐 aplicar el delay antes de empezar a escribir
    const delayTimeout = window.setTimeout(startTyping, delay * 1000);
    timeoutsRef.current.push(delayTimeout);

    return () => {
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, [text, duration, effect, delay]);

  const commonStyle: React.CSSProperties = {
    color,
    whiteSpace: "nowrap",
    display: "inline-block",
  };

  // 🔹 Efecto motion-typewriter (Framer Motion)
  const MotionTypewriterEffect = () => {
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: delay + 0.04 * i,
        },
      }),
    };

    const child = {
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 12, stiffness: 100 },
      },
      hidden: { opacity: 0, y: 20 },
    };

    return (
      <motion.div
        style={{
          overflow: "hidden",
          display: "inline-block",
          color,
          whiteSpace: "pre-wrap", // ✅ respeta saltos de línea
        }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={child}>
            {char === "\n" ? <br /> : char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={`text-animado ${className}`} style={commonStyle}>
      {/* TYPEWRITER (clásico) */}
      {effect === "typewriter" && (
        <>
          <span dangerouslySetInnerHTML={{ __html: displayText }} />
          {showCursor && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ marginLeft: 4, color: cursorColor }}
            >
              |
            </motion.span>
          )}
        </>
      )}

      {/* REVEAL */}
      {effect === "reveal" && (
        <>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: duration, ease: "linear", delay }}
            style={{ overflow: "hidden", display: "inline-block" }}
          >
            {text}
          </motion.span>
          {showCursor && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ marginLeft: 4, color: cursorColor }}
            >
              |
            </motion.span>
          )}
        </>
      )}

      {/* FADE */}
      {effect === "fade" && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration, delay }}
        >
          {text}
        </motion.span>
      )}

      {/* MOTION TYPEWRITER */}
      {effect === "motion-typewriter" && <MotionTypewriterEffect />}
    </div>
  );
};

export default TextAnimado;

