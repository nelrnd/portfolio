import NavBar from './components/NavBar'
import chatPreview from './assets/chat-preview.jpg';
import twitterPreview from './assets/twitter-preview.jpg';
import weatherPreview from './assets/weather-preview.jpg';
import mailIcon from './assets/mail.svg'
import githubIcon from './assets/github.svg';
import twitterIcon from './assets/twitter.svg';
import footerIcon from './assets/footer-icon.svg';
import './App.css'
import { useState } from 'react';

const projects = [
  {
    title: 'BooChat',
    desc: 'A chat app that let’s you find contact, send text and image messages, create group and more...',
    img: chatPreview,
    builtWith: ['React.js', 'Firebase'],
    liveLink: 'https://chatapp.nel.dev/',
    codeLink: 'https://github.com/nelrnd/chat-app'
  },
  {
    title: 'Twitter Clone',
    desc: 'A social network web app that replicates all mains functionality from Twitter, from tweeting to following accounts.',
    img: twitterPreview,
    builtWith: ['React.js', 'Typescript', 'Firebase', 'SASS'],
    liveLink: 'https://twitterclone.nel.dev/',
    codeLink: 'https://github.com/nelrnd/twitter-clone'
  },
  {
    title: 'Weather App',
    desc: 'A weather app that lets you search for a city and its weather and other useful climatic information. Works by calling the OpenWeather API.',
    img: weatherPreview,
    builtWith: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'nelrnd.github.io/weather-app/',
    codeLink: 'https://github.com/nelrnd/weather-app'
  }
]

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

const Hero = () => (
  <section id="hero" className="hero">
    <div className="content">
      <h1>Hello, I'm Nel 👋<br/>Web Developer</h1>
    </div>
  </section>
)

const Project = ({ project }) => (
  <article role="project" className="project">
    <div className="project-text">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <p className='built-with'>Built with {project.builtWith.join(', ')}</p>
      <div className="btn-row">
        <a href={project.liveLink} className='btn'>Live Site</a>
        <a href={project.codeLink} className='btn'>GitHub</a>
      </div>
    </div>
    <div className="project-img">
      <a href={project.liveLink} target="_blank" rel="noreferrer">
        <img src={project.img} alt="" />
      </a>
    </div>
  </article>
)

const Projects = () => (
  <section id="projects" className="projects">
    <div className="content">
      <h2>Projects</h2>

      <ul className="projects-list">
        {projects.map((project, id) => <Project key={id} project={project} />)}
      </ul>
    </div>
  </section>
)

const About = () => (
  <section id="about" className="about">
    <div className="content">
      <h2>About me</h2>

      <p className='about-text'>I’m a passionate full-stack web developer from France. I love to create things that solves real world problem and design beautiful user interfaces along the way. Beside coding, I also enjoy playing piano and climbing mountains.</p>
    </div>
  </section>
)

const TextInput = ({ name, type, value, setValue }) => {
  return (
    <div className='TextInput'>
      <label htmlFor={name}>{name}</label>
      {type === 'area' ? (
        <textarea id={name} placeholder={name} value={value} onChange={(e) => setValue(e.target.value)}></textarea>
      ) : (
        <input type={type} id={name} name={name} placeholder={name} value={value} onChange={(e) => setValue(e.target.value)} />
      )}
    </div>
  )
}

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => console.log('email sent');

  return (
    <section id="contact" className="contact">
      <div className="content">
        <h2>Contact</h2>

        <form role="send email" onSubmit={sendEmail} className='contact-form'>
          <TextInput name="name" type="text" value={name} setValue={setName} />
          <TextInput name="email" type="email" value={email} setValue={setEmail} />
          <TextInput name="message" type="area" value={message} setValue={setMessage} /> 
          <button type="submit" className='btn'>Submit</button>
        </form>

        <div className='contact-text'>
          <p>You want to get in touch? Feel free to reach out to me if you an idea or question.</p>

          <ul className='contact-links'>
            <li>
              <img src={mailIcon} alt="email" />
              <a href="mailto:hello@nel.dev">hello@nel.dev</a>
            </li>
            <li>
              <img src={githubIcon} alt="" />
              <a href="#">GitHub</a>
            </li>
            <li>
              <img src={twitterIcon} alt="" />
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className='footer'>
    <div className="content">
      <img src={footerIcon} alt="" className="footer-img" />

      <div className='footer-text'>
        <p>Design and code by Nel</p>
        <p>© Copyright 2023</p>
      </div>
    </div>
  </footer>
)

export default App
