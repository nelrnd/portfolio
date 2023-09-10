import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './styles/base.sass';
import './styles/misc.sass';

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

/*



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
*/
export default App
