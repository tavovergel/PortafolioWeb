"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type TextEffect = "typewriter" | "reveal" | "fade" | "motion-typewriter";

interface TextAnimadoProps {
  text: string;
  effect?: TextEffect;
  color?: string;
  duration?: number;
  showCursor?: boolean;
  cursorColor?: string;
  className?: string;
  delay?: number;
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

  // 🔹 Efecto clásico de escritura (typewriter) — SIN CAMBIOS
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

    const delayTimeout = window.setTimeout(startTyping, delay * 1000);
    timeoutsRef.current.push(delayTimeout);

    return () => {
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, [text, duration, effect, delay]);

  // 🔹 Estilos generales
  const commonStyle: React.CSSProperties = {
    color,
    whiteSpace: "normal",
    display: "inline",
    wordBreak: "keep-all", // ✅ evita cortes de palabra
    overflowWrap: "break-word",
    maxWidth: "100%",
  };

  // 🔹 Efecto motion-typewriter — CORREGIDO
  const MotionTypewriterEffect = () => {
    // Divide el texto en palabras (no caracteres)
    const words = text.split(" ");
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: duration ? duration / words.length : 0.05,
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
      hidden: { opacity: 0, y: 10 },
    };

    return (
      <motion.div
        style={{
          overflow: "hidden",
          display: "inline-block",
          color,
          whiteSpace: "pre-wrap", // ✅ permite saltos de línea naturales
          wordBreak: "keep-all",
          overflowWrap: "break-word",
          maxWidth: "100%",
        }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ display: "inline-block", marginRight: "0.3rem" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      className={`text-animado break-words whitespace-normal ${className}`}
      style={commonStyle}
    >
      {/* TYPEWRITER */}
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
            transition={{ duration, ease: "linear", delay }}
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

      {/* MOTION TYPEWRITER (ahora palabra por palabra) */}
      {effect === "motion-typewriter" && <MotionTypewriterEffect />}
    </div>
  );
};

export default TextAnimado;
