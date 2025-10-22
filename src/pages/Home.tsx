
import '@fontsource/roboto/300.css';

import SkillsSection from '../components/SkillsSection';
import Demo from '../components/ProjectSection';
import SectionDos from '../components/SectionDos';  
import ContactSection from '../components/ContactSection';
// importar el particle
import ParticulasBack from '../components/ParticulasBack';
import "./home.css";


const Home = () => {
  return (
    <div>
      <ParticulasBack /> {/* 👈 Componente de partículas de fondo y header */}

      <SkillsSection />{/* 👈 Componente de Habilidades */}
      <Demo />

      <ContactSection />{/* 👈 Componente de Contacto */}

    </div>
  );
};

export default Home;