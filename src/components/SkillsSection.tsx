import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import "./SkillsSection.css"; 

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
  { name: "React", icon: <FaReact className="skill-icon" /> },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon" /> },
  { name: "Python", icon: <FaPython className="skill-icon" /> },
  { name: "Java", icon: <FaJava className="skill-icon" /> },
  { name: "SQL", icon: <FaDatabase className="skill-icon" /> },
  { name: "MongoDB", icon: <SiMongodb className="skill-icon" /> },
];

export default function SkillsSection() {
  return (
    <section className="skills-section">
      {/* Sección de habilidades a la izquierda */}
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, x: 10 }}
            className="skill-card"
          >
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Descripción a la derecha */}
      <div className="skills-text">
        <h2>HABILIDADES</h2>
        <p>
          Como desarrollador full stack, domino múltiples tecnologías que me permiten crear soluciones eficientes y escalables. Desde la creación de interfaces atractivas hasta la implementación de servidores y bases de datos optimizadas.
        </p>
      </div>
    </section>
  );
}
