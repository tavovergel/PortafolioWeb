import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
//importar el motion frame para el nombre
import NombreAnimado from "../components/NombreAnimado";
import "./home.css"

const Home = () => (
  
  <Container fixed>
  
      <section className="section-uno">
        <div>
          
          <h2>INGENIERO DE SOFTWARE</h2>
          <h3>DISEÑO & DESARROLLO WEB</h3>
          {/* animacion con motion frame */}
          
          <NombreAnimado />

        </div>
        <div className="svgdeveloper">
          <img src="src\assets\perfilghibli.png" alt="developer" />
          
        </div> 
      </section>

      <section className="section-uno">
        <div>
          
          <h2>INGENIERO DE SOFTWARE</h2>
          <h3>DISEÑO & DESARROLLO WEB</h3>
        </div>
        <div className="svgimg2">
          <img src="src\assets\undraw_version-control_e4yu.svg" alt="developer" />
          
        </div> 
      </section>
      
    </Container> 
);

export default Home;