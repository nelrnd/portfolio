import { useState } from 'react';
import icon from '../assets/icon.svg';
import '../styles/NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <>
      <header className={`NavBar ${isOpen ? 'open' : ''}`}>
        <div className="flex-row align spaced">
          <a href="#hero">
            <img src={icon} alt="Nel Renaudin" />
          </a>
          <button role="menu" className='menu-btn' onClick={toggle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.25 7.25H21.75V8.75H2.25V7.25Z" fill="white" className='bar-1'/>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.25 15.25H21.75V16.75H2.25V15.25Z" fill="white" className='bar-2'/>
            </svg>
          </button>
          <nav role="main">
            <ul className='flex-row gap-2'>
              <li>
                <a href="#projects" onClick={close}>PROJECTS</a>
              </li>
              <li>
                <a href="#about" onClick={close}>ABOUT</a>
              </li>
              <li>
                <a href="#contact" onClick={close}>CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isOpen && <div className='NavBar_backdrop' onPointerDown={close}></div>}
    </>
  )
}

export default NavBar