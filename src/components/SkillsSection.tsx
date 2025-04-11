import {FaHtml5,FaCss3Alt,FaJs,FaWordpress,FaReact,FaNodeJs,FaPython,FaJava,FaDatabase,FaGithub,FaBootstrap, FaCloud} from "react-icons/fa";
import {SiMongodb,SiSalesforce} from "react-icons/si";
import { ArchitectureGroupAWSCloudlogo } from 'aws-react-icons';
import { motion } from "framer-motion";
import "./SkillsSection.css"; 

const skillsFront = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
  { name: "JavaScript", icon: <FaJs className="skill-icon" /> },
  { name: "React", icon: <FaReact className="skill-icon" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="skill-icon" /> },

];

const skillsBack = [
  { name: "Node.js", icon: <FaNodeJs className="skill-icon" /> },
  { name: "Python", icon: <FaPython className="skill-icon" /> },
  { name: "Java", icon: <FaJava className="skill-icon" /> },
  { name: "SQL", icon: <FaDatabase className="skill-icon" /> },
  { name: "MongoDB", icon: <SiMongodb className="skill-icon" /> },
];

const skillsother = [
  { name: "Git Hub", icon: <FaGithub className="skill-icon" /> },
  { name: "Wordpress", icon: <FaWordpress className="skill-icon" /> },
  { name: "Salesforce", icon: <SiSalesforce className="skill-icon" /> },
  { name: "AWS", icon: <ArchitectureGroupAWSCloudlogo size={62} className="skill-icon" /> },
  { name: "Azure", icon: <FaCloud size={62} className="skill-icon" /> },
    
  
]

export default function SkillsSection() {
  return (
    
    <section className="skills-section">
      
      {/* Sección de habilidades a la izquierda */}
      <div className="skills-container">
        <h1>FRONTEND</h1>
        {skillsFront.map((skill, index) => (
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

      <div className="skills-container">
      <h1>BACKEND</h1>
        {skillsBack.map((skill, index) => (
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

      <div className="skills-container">
      <h1>PLATAFORMAS</h1>
        {skillsother.map((skill, index) => (
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
      
    </section>
  );
}
