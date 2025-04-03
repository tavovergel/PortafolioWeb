
import Container from '@mui/material/Container';

import Divisor from "../components/Division"
import '@fontsource/roboto/300.css';


//importar el motion frame para el nombre
import NombreAnimado from "../components/NombreAnimado";
import "./home.css"

//importar componentes de las habilidades 
import SkillsSection from '../components/SkillsSection';



const Home = () => {

  return (
    <Container maxWidth="xl">
      {/* Sección Principal */}
      <section className="section-uno">
        <div>
          <h2>DESARROLLADOR FULL STACK</h2>
          <h3>DISEÑO & DESARROLLO WEB</h3>
          <NombreAnimado />
        </div>
        <div className="svgdeveloper">
          <img src="assets/perfilghibli.png" alt="developer" />
        </div>
      </section>

      <Divisor />

      {/* Sección Sobre Mí */}
      <section className="section-dos">
        <div className="svgimg2">
          <img src="assets/undraw_version-control_e4yu.svg" alt="developer" />
        </div>
        <div>
          <h2>Apasionado por la tecnología</h2>
          <h3>Cada reto es una oportunidad para obtener conocimiento</h3>
          <p>
            Soy un desarrollador full stack con gran flexibilidad para adaptarme y aprender nuevas tecnologías. Mi enfoque principal es el desarrollo web,
            donde busco siempre ofrecer soluciones innovadoras y funcionales...
          </p>
        </div>
      </section>

      <Divisor />
      {/* Sección Habilidades */}
      <SkillsSection/>
    </Container>
  );
};


export default Home;