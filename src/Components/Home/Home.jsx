import React from 'react';
import './Home.scss';
import profile_pic from '../../assets/profile_pic.png';
import { Link } from 'react-scroll';
import { FaHandshake, FaFileAlt } from 'react-icons/fa';  // Import de l'icône pour le CV

function Home() {
  return (
    <section id='intro'>
      <div className='intro-content'>
        <span className="intro-text">
          Je suis <span className="intro-name">Luca Otto</span> <br />
          Développeur Web
        </span>
        <p className="intro-paragraph">  
        Je m'appelle Otto Luca, passionné par le développement web. Curieux et créatif, j'aime concevoir des solutions innovantes et optimiser les expériences utilisateur. Mon objectif est de créer des projets qui allient performance, esthétique et praticité.
        </p>

        {/* Lien vers le CV avec icône */}
        <a href="https://www.doyoubuzz.com/luca-otto" target="_blank" rel="noopener noreferrer" className="btn-cv">
          <FaFileAlt className='cv-icon' /> Mon CV
        </a>
      </div>
      <img className='profile_pic' src={profile_pic} alt="photo de profil" />
    </section>
  );
}

export default Home;