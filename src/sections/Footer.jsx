import badgeIcon from '../assets/badge-icon.svg';
import '../styles/Footer.css';

const Footer = () => (
  <footer className='Footer pd-10'>
    <div className="max-width grid">
      <img src={badgeIcon} alt="" />
      <div className='flex-col gap-1 text'>
        <p>Design and code by Nel</p>
        <p>© Copyright 2023</p>
      </div>
    </div>
  </footer>
)

export default Footer