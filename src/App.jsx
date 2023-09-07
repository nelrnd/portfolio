import NavBar from './components/NavBar'
import chatPreview from './assets/chat-preview.jpg';
import twitterPreview from './assets/twitter-preview.jpg';
import weatherPreview from './assets/weather-preview.jpg';
import './App.css'
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';

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

function App() {
  return (
    <>
      <NavBar />
      
      <Section>
        {projects.map((project, id) => <ProjectCard key={id} project={project} />)}
      </Section>
    </>
  )
}

export default App
