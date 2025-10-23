
import '@fontsource/roboto/300.css';

import SkillsSection from '../components/SkillsSection';
import Demo from '../components/ProjectSection'; 
import ContactSection from '../components/ContactSection';
// importar el particle
import ParticulasBack from '../components/ParticulasBack';
import "./home.css";
import CertificationSection from '../components/CertificationSection';


const Home = () => {
  return (
    <div>
      <ParticulasBack /> {/* 👈 Componente de partículas de fondo y header */}

      <SkillsSection />{/* 👈 Componente de Habilidades */}
      <Demo />
      <CertificationSection/>{/* 👈 Componente de Certificaciones */}

      <ContactSection />{/* 👈 Componente de Contacto */}

    </div>
  );
};

export default Home;