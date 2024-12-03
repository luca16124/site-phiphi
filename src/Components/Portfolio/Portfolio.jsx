import React, { useState } from 'react';
import './Portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; 

const projects = [
  {
    title: 'Booki',
    description: "Création de la page d'accueil d'une agence de voyage en utilisant HTML et CSS, avec intégration d'une interface responsive à partir de maquettes Figma. Ce projet m'a permis de développer des compétences en design responsive, en veillant à ce que le site soit parfaitement adapté aux appareils mobiles, tablettes et desktops.",
    image: '/Booki.jpg',
    codeLink: 'https://github.com/luca16124/Projet-2.git',
    websiteLink: 'https://bookiproject.vercel.app/',
  },
  {
    title: 'Sophie Bluel',
    description: "Développement d'une page web dynamique pour une architecte d'intérieur en utilisant JavaScript et une API. Ce projet inclut la gestion des événements utilisateurs, la manipulation du DOM, et la création d'une page de connexion pour l'administrateur ainsi qu'une modale d'upload de médias. Il m'a permis de perfectionner mes compétences en JavaScript et en communication avec une API",
    image: '/sophie-bluel.png',
    codeLink: 'https://github.com/luca16124/projet3.git',
    websiteLink:"https://sophie-bluel-dusky.vercel.app/",
  },
  
  {
    title: 'Nina Craducci',
    description: "Optimisation du référencement (SEO) et de l'accessibilité d'un site en tant que développeuse freelance. J'ai utilisé des outils comme Lighthouse et Wave pour analyser la performance et l'accessibilité du site, puis proposé et implémenté des améliorations pour augmenter la vitesse de chargement, la structure du code, et le référencement. Un rapport détaillé a été créé pour illustrer l'impact des modifications sur les performances du site",
    image: '/Nina.jpg',
    codeLink: 'https://github.com/luca16124/Projet-4.git',
    websiteLink: 'https://nina-carducci-p4.vercel.app/'
  },
  
  {
    title: 'Kasa',
    description: "Développement du front-end d'une application en utilisant React et React Router pour une expérience utilisateur fluide et réactive. J'ai travaillé sur la présentation des données avec des composants React, configuré la navigation entre les pages, et utilisé des données simulées à partir d'un fichier JSON. Le projet a été configuré avec vite, et Node.js a été utilisé pour exécuter du code JavaScript en dehors du navigateur",
    image: '/Kasa.png',
    codeLink: 'https://github.com/luca16124/projet-5.git',
    
  },
  {
    title: 'Mon vieux grimoire',
    description: "Développement du back-end d'un site de notation de livres en utilisant Express et MongoDB. J'ai implémenté des opérations CRUD pour la gestion des livres et des notations, intégré un système d'authentification sécurisé, et géré le téléchargement et l'optimisation des images. Le projet suit une architecture MVC et applique les bonnes pratiques du Green Code pour minimiser l'empreinte écologique.",
    image: '/grimoire.jpg',
    codeLink: 'https://github.com/luca16124/projet-6.git',
  },
  
];

const ProjectModal = ({ project, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="modal-links">
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" /> {/* Icône GitHub */}
          Code source
        </a>
        {project.websiteLink && (
          <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} className="icon" /> {/* Icône site web */}
            Lien vers le site
          </a>
        )}
      </div>
      <button className="close-button" onClick={onClose} aria-label="Fermer la modale">&times;</button>
    </div>
  </div>
);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div id="portfolio" className='titlecontainer'>
        <h2 className="title1">Mon Portfolio</h2>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="card" key={index} onClick={() => setSelectedProject(project)}>
            <div className="card-image" style={{ backgroundImage: `url(${project.image})` }}>
              {/* La description n'est plus affichée ici */}
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};
export default Portfolio;