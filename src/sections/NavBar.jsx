import { useContext, useEffect, useState } from 'react';
import { Flex } from '../components/elements';
import { styled } from 'styled-components';
import icon from '../assets/icon.svg';
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from '../context/ThemeContext';

const StyledNavBar = styled.header`
  width: var(--layout-width);
  padding: 0.625rem 1rem;
  position: fixed;
  z-index: 1000;
  top: 1rem;
  left: calc(50% - var(--layout-width) / 2);
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  animation-name: navbar-anim;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0, 0.19, 0.2, 0.97);
  animation-fill-mode: both;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    content: "";
    display: block;
    background-color: hsla(240, 10%, 10%, 95%);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    border-radius: 1rem;
    border-bottom: solid var(--color-650);
  }
  
  img {
    100%;
  }
`;

const NavBarIcon = styled.a`
  width: 1.5rem;
  height: 1.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const NavBarButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: var(--color-900);
  cursor: pointer;

  img, svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    outline: solid 0.15rem var(--color-650);
  }

  &:focus {
    outline: solid 0.1rem var(--color-0)
  }
`;

const NavBarMenuButton = styled(NavBarButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .bar-1, 
  .bar-2 {
    transition: transform 0.2s ease-in-out;
    transform-origin: left;
  }

  .open & .bar-1 {
    transform: translateY(-0.33rem) rotate(45deg);
  }

  .open & .bar-2 {
    transform: translateY(0.33rem) rotate(-45deg);
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

const NavBarMenu = styled.nav`
  a {
    color: var(--color-50);
    font-weight: 400;
    text-decoration: none;
    display: block;
    padding: 0.25rem 0.5rem;
  }

  a:hover {
    color: var(--color-350);
  }

  @media (max-width: 800px) {
    & {
      display: none;
    }

    & ul {
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
    }

    .open & {
      display: block;
      width: 100%;
      position: absolute;
      top: calc(100% + 0.75rem);
      left: 0;
      padding: 1rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
      background-color: hsla(240, 10%, 10%, 95%);
      backdrop-filter: blur(1rem);
      -webkit-backdrop-filter: blur(1rem);
      border-radius: 1rem;
      border-bottom: solid var(--color-650);
      transform-origin: top center;
      animation-name: navbar-menu-anim;
      animation-duration: 0.3s;
      animation-timing-function: cubic-bezier(0, 0.19, 0.2, 0.97);
    }
  }
`;

const NavBarBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${props => props.$open ? 'block' : 'none'};
`;

const StyledThemeToggle = styled(NavBarButton)`
  overflow: hidden;
  .icons {
    transition: transform 0.3s ease-in-out;
  }

  .icons img {
    width: 100%;
    height: 100%;
    padding: 0.5rem; 
  }

  .dark & .icons {
    transform: translateY(-50%);
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <>
      <StyledNavBar className={isOpen ? 'open' : ''}>
        <Flex $spaced>
          <NavBarIcon href="#hero">
            <img src={icon} alt="Nel Renaudin" />
          </NavBarIcon>

          <NavBarMenuButton aria-label="open menu" onClick={toggle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.25 7.25H21.75V8.75H2.25V7.25Z" fill="white" className='bar-1'/>
              <path fillRule="evenodd" clipRule="evenodd" d="M2.25 15.25H21.75V16.75H2.25V15.25Z" fill="white" className='bar-2'/>
            </svg>
          </NavBarMenuButton>

          <NavBarMenu role="main">
            <Flex as="ul" $gap="xl">
              <li>
                <a href="#projects">PROJECTS</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </Flex>
          </NavBarMenu>
        </Flex>
      </StyledNavBar>

      <NavBarBackdrop $open={isOpen} onClick={close} />
    </>
  )
}

const ThemeToggle = () => {
  // set color theme based on system preferences
  useMediaQuery(
    { query: '(prefers-color-scheme: dark)'},
    undefined,
    (isSystemDark) => setTheme(isSystemDark ? 'dark' : 'light')
  );

  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
  <StyledThemeToggle onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
    <div className='icons'>
      <img src={sunIcon} alt="" />
      <img src={moonIcon} alt="" />
    </div>
  </StyledThemeToggle>
  )
}

export default NavBar