import mailIcon from '../assets/mail.svg'
import githubIcon from '../assets/github.svg';
import twitterIcon from '../assets/twitter.svg';
import '../styles/Contact.css';

const Contact = () => (
  <section id="contact">
    <div className="content">
      <h2 className='mb-2'>Contact</h2>
      <div className="grid">
        <form action="#" className='flex-col gap-1'>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <textarea placeholder="message"></textarea>
          <button type="submit">Submit</button>
        </form>
        <div>
          <p className='mb-2'>You want to get in touch? Feel free to reach out to me if you an idea or question.</p>
          <ul className='flex-col gap-1'>
            <li className='flex-row gap-0_5 align'>
              <img src={mailIcon} alt="Email" className='icon' />
              <a href="#">hello@nel.dev</a>
            </li>
            <li className='flex-row gap-0_5 align'>
              <img src={githubIcon} className='icon' />
              <a href="#">GitHub</a>
            </li>
            <li className='flex-row gap-0_5 align'>
              <img src={twitterIcon} className='icon' />
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Contact

/* Old

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