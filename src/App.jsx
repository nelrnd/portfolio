import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
