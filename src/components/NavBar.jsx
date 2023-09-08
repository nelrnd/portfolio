import { useState } from 'react';
import icon from '../assets/icon.svg';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(state => !state);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`NavBar${menuOpen ? ' opened' : ''}`}>
        <a href="#hero">
          <img src={icon} alt="Nel Renaudin" />
        </a>

        <nav role="main">
          <ul className='nav-links'>
            <li>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </nav>

        <button role="menu" className='menu-btn' onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.25 7.25H21.75V8.75H2.25V7.25Z" fill="white" className='bar-1'/>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.25 15.25H21.75V16.75H2.25V15.25Z" fill="white" className='bar-2'/>
          </svg>
        </button>
      </header>

      {menuOpen && <div className='nav-backdrop' onPointerDown={closeMenu}></div>}
    </>
  )
}

export default NavBar;