import mailIcon from '../assets/mail.svg'
import githubIcon from '../assets/github.svg';
import twitterIcon from '../assets/twitter.svg';

const Contact = () => (
  <section id="contact">
    <div className="content">
      <h2>Contact</h2>
      <div className="grid">
        <form action="#" className='flex-col gap-1'>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <textarea placeholder="message"></textarea>
          <button type="submit">Submit</button>
        </form>
        <div>
          <p className='mgb-2'>You want to get in touch? Feel free to reach out to me if you an idea or question.</p>
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