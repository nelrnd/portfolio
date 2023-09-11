import { useMediaQuery } from 'react-responsive';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const systemPrefersDark = useMediaQuery(
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
    <div className='ThemeToggle'>
      <input 
        type="checkbox" 
        checked={theme === 'dark'} 
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
        aria-label={`Toggle ${theme} mode`}
      />
      <div className='flex-col icons'>
        <img src={sunIcon} alt="sun" />
        <img src={moonIcon} alt="moon" />
      </div>
    </div>
  )
}

export default ThemeToggle;


/*
const ThemeSwitch = () => (
  <div className='ThemeSwitch' aria-hidden="true">
    <input type="checkbox" name="theme-switch" title="switch theme" />
    <div className='ThemeSwitch_icons'>
      <img src={sunIcon} alt="" />
      <img src={moonIcon} alt="" />
    </div>
  </div>
)
*/