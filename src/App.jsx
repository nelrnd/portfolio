import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useEffect, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme])

  useMediaQuery(
    { query: '(prefers-color-scheme: dark)'},
    undefined,
    (isSystemDark) => setTheme(isSystemDark ? 'dark' : 'light')
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
