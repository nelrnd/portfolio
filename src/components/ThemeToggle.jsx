import '../styles/ThemeToggle.css';

const ThemeToggle = () => {

}

export default ThemeToogle;



const ThemeSwitch = () => (
  <div className='ThemeSwitch' aria-hidden="true">
    <input type="checkbox" name="theme-switch" title="switch theme" />
    <div className='ThemeSwitch_icons'>
      <img src={sunIcon} alt="" />
      <img src={moonIcon} alt="" />
    </div>
  </div>
)