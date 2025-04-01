
import Container from '@mui/material/Container';

import Divisor from "../components/Division"
import '@fontsource/roboto/300.css';


//importar el motion frame para el nombre
import NombreAnimado from "../components/NombreAnimado";
import "./home.css"

const Home = () => (
  
  <Container maxWidth="xl">
  
      <section className="section-uno">
        <div>
          
          <h2>DESARROLLADOR FULL STACK</h2>
          <h3>DISEÑO & DESARROLLO WEB</h3>
          {/* animacion con motion frame */}
          
          <NombreAnimado />

        </div>
        <div className="svgdeveloper">
          <img src="src\assets\perfilghibli.png" alt="developer" />
          
        </div> 
      </section>

      
        
          <Divisor/>
        

      <section className="section-dos">
        <div className="svgimg2">
          <img src="src\assets\undraw_version-control_e4yu.svg" alt="developer" />
          
        </div>
        <div>
          <h2>Apasionado por la tecnologia</h2>
          <h3>Cada reto es una oportunidad para obtener conocimiento</h3>
          <p>
            Soy un desarrollador full stack con una gran flexibilidad para adaptarme y aprender nuevas tecnologías. Mi enfoque principal es el desarrollo web,
             donde busco siempre ofrecer soluciones innovadoras y funcionales. Estoy
              comprometido con la mejora continua, explorando herramientas y técnicas
               que me permitan crear experiencias digitales de alto impacto. Si estás
                buscando llevar tu proyecto al siguiente nivel, no dudes en contactarme.
                 Juntos, podemos dar vida a tus ideas y transformar tus necesidades en soluciones
                  efectivas y atractivas."</p>
        </div>
         
      </section>
      
    </Container> 
);

export default Home;