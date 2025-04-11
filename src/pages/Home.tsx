


import Divisor from "../components/Division"
import '@fontsource/roboto/300.css';


//importar el motion frame para el nombre
import NombreAnimado from "../components/NombreAnimado";
import "./home.css"

//importar componentes de las habilidades 
import SkillsSection from '../components/SkillsSection';
import { motion } from "framer-motion";



const Home = () => {

  return (
    <div>
      {/* Sección Principal */}
      <section className="section-uno">
        <div>
          <h2>DEVELOPER & INGENIERO DE SOFTWARE </h2>
          <br/>
          <h3>Apasionado, Me gusta codificar y solucionar cosas sencillas pero maravillosas</h3>
          <br/>
          <NombreAnimado />
          <br/>
          <h3>DISEÑO & DESARROLLO WEB</h3>
          <br/>
        </div>
        <div className="svgdeveloper">
          <img src="assets/perfilghibli.png" alt="developer" />
        </div>
      </section>

      

      {/* Sección Sobre Mí */}
      <section className="section-dos">
        <div className="svgimg2">
        <img src="/assets/Code typing-bro.svg" alt="developer" />
        </div>
      </section>

      <section className='textuno'>
      <motion.div
        className="contenido"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }} 
      >
        <h2>Hola, Mucho gusto</h2>

        <p>
          Desde que comencé en el mundo de la tecnología, he aprendido que cada día trae consigo una nueva oportunidad para aprender y fortalecer habilidades.
          Cada reto representa una oportunidad para crecer, resolver problemas y aportar soluciones con impacto real.
          Estoy listo para ayudarte a encontrar una solución innovadora, funcional y alineada con los objetivos de tu proyecto.
        </p>

        <p className="textgrande">
          <strong>¡Hablemos! Estoy aquí para escucharte y construir juntos algo genial.</strong>
        </p>
      </motion.div>
    </section>
     
      {/* Sección Habilidades */}
      <SkillsSection/>
    </div>
  );
};


export default Home;