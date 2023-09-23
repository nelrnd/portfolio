import styled from "styled-components";
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';
import { IconButton } from "./elements";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const StyledThemeToggler = styled(IconButton)`
  .icon-wrapper {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    display: block;
    width: 60%;
    height: 60%;
  }
  @media (max-width: 800px) {
    margin: 0;
    margin-top: -0.25rem;
  }
`;

const icons = {
  light: { y: 0},
  dark : { y: '-2rem'},
}

const icon = {
  active: { scale: 1, rotate: 0 },
  inactive: { scale: 0.5, rotate: -45 }
}

const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <StyledThemeToggler onClick={toggleTheme}>
      <motion.div className="icons" initial={icons[theme]} animate={icons[theme]} transition={{ duration: 0.3 }}>
        <div className="icon-wrapper">
          <motion.img src={sunIcon} alt="" initial={icon[theme === 'light' ? 'active' : 'inactive']} animate={icon[theme === 'light' ? 'active' : 'inactive']} />
        </div>
        <div className="icon-wrapper">
          <motion.img src={moonIcon} alt="" initial={icon[theme === 'dark' ? 'active' : 'inactive']} animate={icon[theme === 'dark' ? 'active' : 'inactive']} />
        </div>
      </motion.div>
    </StyledThemeToggler>
  )
}

export default ThemeToggler;