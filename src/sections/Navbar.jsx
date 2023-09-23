import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Flex, IconButton } from "../components/elements";
import styled from "styled-components";
import ThemeToggler from "../components/ThemeToggler";
import PropTypes from "prop-types";

const background = `
  background-color: hsla(240, 10%, 10%, 90%);
  border-bottom: solid 0.125rem var(--color-650);
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
`;

const StyledNavbar = styled(motion.header)`
  position: fixed;
  z-index: 1000;
  top: 1rem;
  left: calc(50% - var(--layout-width) / 2);
  width: var(--layout-width);
  padding: 0.75rem 1rem;
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    content: "";
    display: block;
    ${background}
  }
  @media (max-width: 800px) {
    width: 90vw;
    left: calc(50% - 45vw);
  }
`;

const StyledNavbarBrand = styled.a`
  width: 1.5rem;
  height: 1.5rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledNavbarMenuToggler = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  path {
    transition: transform 0.2s ease-in-out;
    transform-origin: left;
  }
  &.open svg path:first-of-type {
    transform: translateY(-0.35rem) rotate(45deg);
  }
  &.open svg path:nth-of-type(2) {
    transform: translateY(0.35rem) rotate(-45deg);
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

const StyledNavbarMenu = styled(motion.nav)`
  a {
    color: var(--color-50);
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    padding: 0.25rem 0.5rem;
  }
  a:hover {
    color: var(--color-350);
  }
  @media (max-width: 800px) {
    width: 100%;
    position: absolute;
    top: calc(100% + 0.75rem);
    left: 0;
    padding: 1rem;
    ${background}
    & ul {
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
    }
  }
`;

const NavbarBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${props => props.$isOpen ? 'block' : 'none'};
`;

const NavbarBrand = () => (
  <StyledNavbarBrand href="#hero">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        initial={{ pathLength: 0, opacity: 0.5 }} 
        animate={{ pathLength: 1, opacity: 1 }} 
        transition={{ duration: 0.75, ease: 'easeInOut' }}
        d="M7.41667 15.6667V19.7917C7.41667 21.5636 5.98025 23 4.20833 23V23C2.43642 23 1 21.5636 1 19.7917V5.26168C1 2.90802 2.90802 1 5.26168 1V1C7.09604 1 8.7246 2.1738 9.30467 3.91402L14.6953 20.086C15.2754 21.8262 16.904 23 18.7383 23V23C21.092 23 23 21.092 23 18.7383V4.20833C23 2.43642 21.5636 1 19.7917 1V1C18.0198 1 16.5833 2.43642 16.5833 4.20833V8.33333" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
    </svg>
  </StyledNavbarBrand>
)

const NavbarMenuToggler = ({ isOpen, handleClick }) => (
  <StyledNavbarMenuToggler aria-label="open menu" onClick={handleClick} className={isOpen ? 'open' : ''}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.25 7.25H21.75V8.75H2.25V7.25Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2.25 15.25H21.75V16.75H2.25V15.25Z" fill="white" />
    </svg>
  </StyledNavbarMenuToggler>
)

NavbarMenuToggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

const NavbarMenu = ({ isOpen }) => {
  const isScreenSmall = useMediaQuery({ query: '(max-width: 800px)'});

  const menu = {
    hidden: { opacity: 0, y: '-2rem' },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delayChildren: isScreenSmall ? 0.2 : 0.5,
        staggerChildren: 0.15,
      }
    },
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <AnimatePresence>
      {(!isScreenSmall || isOpen) && (
        <StyledNavbarMenu 
          role="main"
          transition={{ delayChildren: 3 }}
          variants={menu}
          initial="hidden"
          animate="visible"
          exit={ isScreenSmall ? { y: '-0.75rem', opacity: 0 } : {} }
        >
          <Flex as="ul" $gap="xl">

            <motion.li variants={item}><a href="#projects">Projects</a></motion.li>
            <motion.li variants={item}><a href="#about">About</a></motion.li>
            <motion.li variants={item}><a href="#contact">Contact</a></motion.li>
            <motion.li variants={item}><ThemeToggler /></motion.li>
          </Flex>
        </StyledNavbarMenu>
      )}
    </AnimatePresence>
  )
}

NavbarMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen(menuIsOpen => !menuIsOpen);
  const closeMenu = () => setMenuIsOpen(false);

  return (
    <>
      <StyledNavbar initial={{ y: -100 }} animate={{ y: 0 }}>
        <Flex $spaced>
          <NavbarBrand />
          <NavbarMenuToggler isOpen={menuIsOpen} handleClick={toggleMenu} />
          <NavbarMenu isOpen={menuIsOpen} />
        </Flex>
      </StyledNavbar>

      <NavbarBackdrop $isOpen={menuIsOpen} onPointerDown={closeMenu} />
    </>
  )
}

export default Navbar;