import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

import data from "../data.json"

function App() {
  return (
    <div>
      <Hero hero={data.hero} />
      <Projects projects={data.projects} />
      <About about={data.about} />
      <Contact contact={data.contact} />
    </div>
  )
}

export default App
