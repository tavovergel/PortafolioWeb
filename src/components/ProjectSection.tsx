import React from 'react';
import './ProSection.css';

interface Project {
  title: string;
  image: string;
  description: string;
  url: string;
  hoverTech?: string; // Nueva propiedad para la tecnología
  hoverTag?: string;   // Nueva propiedad para el tag
}

const projects: Project[] = [
  {
    title: 'Tickets para conciertos',
    image: '/assets/concierto.png',
    description: 'Sistema de venta de tickets para eventos musicales',
    url: 'http://54.167.62.3/ ',
    hoverTech: 'Angular 19',
    hoverTag: 'E-COMMERCE'
  },
  {
    title: 'BIOTAR SAS',
    image: '/assets/biotar.png',
    description: 'Sitio web tratamiento de aguas residuales',
    url: 'https://biotarsk.com',
    hoverTech: 'Wordpress',
    hoverTag: 'CORPORATIVO'
  },
  {
    title: 'COUNTRYHOME',
    image: '/assets/country.jpeg',
    description: 'Plataforma de ventas de lotes',
    url: 'https://country-home.vercel.app/',
    hoverTech: 'Html,Css, Javascript',
    hoverTag: 'Ventas'
  },
];

const ProSection: React.FC = () => {
  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="portfolio-section">
      <h2>Proyectos Recientes</h2>
      <p>
        Algunos de mis proyectos destacados{' '}
        <a href="mailto:vergeldev7@gmail.com">Enviame un Email</a>
      </p>

      <div className="grid">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="card"
            onClick={() => handleCardClick(project.url)}
          >
            <div className="card-image-container">
              <img src={project.image} alt={project.title} />
              <div className="card-title">{project.title}</div>
              <div className="card-hover-content">
                <div className="hover-main-text">
                  {project.hoverTech && <div>{project.hoverTech}</div>}
                </div>
                <div className="hover-description">
                  {project.description}
                </div>
                {project.hoverTag && (
                  <div className="hover-tag">{project.hoverTag}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProSection;