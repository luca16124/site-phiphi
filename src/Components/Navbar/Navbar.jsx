import React from 'react';
import './Navbar.scss';
import logo from '../../assets/logo.webp';
import { Link } from 'react-scroll';
import { FaAddressBook } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='navbar'>
  {/* Logo entouré du composant Link */}
  <Link
    to="intro" 
    smooth={true} 
    duration={500} 
    className='logo-link'
  >
    <img src={logo} alt="logo" />
  </Link>
      
      
      <Link
        to="intro" 
        smooth={true} 
        duration={500} 
        className='nav-menu'
      >
        Accueil
      </Link>
      <Link
        to="skills" 
        smooth={true} 
        duration={500} 
        className='nav-menu'
      >
        Compétences
      </Link>
      <Link
        to="portfolio"  
        smooth={true} 
        duration={500} 
        className='nav-menu'
      >
        Portfolio
      </Link>

      <Link 
  to="footer"  
  smooth={true} 
  duration={500} 
  className="nav-connect"
>
  <button className="nav-connect">
    <FaAddressBook className='contact-icon' />
    Me contacter
  </button>
</Link>
    </div>
  );
}

export default Navbar;