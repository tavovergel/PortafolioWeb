"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footert.css";

const Footer = () => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        © 2025 <span className="highlight">VergelDev</span>. Todos los derechos reservados.
      </motion.p>

      <div className="social-icons">
        {[
          { icon: <FaLinkedin />, url: "https://linkedin.com" },
          { icon: <FaGithub />, url: "https://github.com" },
          { icon: <FaFacebook />, url: "https://facebook.com" },
          { icon: <FaInstagram />, url: "https://instagram.com" },
          { icon: <FaTwitter />, url: "https://twitter.com" },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            custom={i}
            whileHover={{ scale: 1.3, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;
