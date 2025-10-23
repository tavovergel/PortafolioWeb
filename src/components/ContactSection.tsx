import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // 🔹 Activar loading

    emailjs
      .send(
        "service_wdz0s5w",     // Service ID
        "template_qm16ig3",    // Template ID
        form,                  // Datos del formulario
        "FfqoHPfht2RF5nXP_"    // Public Key
      )
      .then(() => {
        alert("📨 ¡Mensaje enviado con éxito! Te contactaré pronto.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        alert("❌ No se pudo enviar el mensaje. Intenta nuevamente.");
      })
      .finally(() => setLoading(false)); 
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-overlay" />

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="contact-title">💬 Conectemos</h2>
        <p className="contact-subtitle">
          Hablemos sobre tu proyecto o idea. Estoy listo para escucharte.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
              required
              disabled={loading} // 
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="input-group textarea-group">
            <FaCommentDots className="input-icon" />
            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              value={form.message}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <motion.button
            type="submit"
            className={`contact-btn ${loading ? "loading" : ""}`}
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            disabled={loading} // 🔹 Desactivar botón
          >
            {loading ? "Enviando..." : "Enviar mensaje"} {/* 🔹 Texto dinámico */}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;

