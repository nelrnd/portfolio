import PropTypes from 'prop-types'
import arrowIcon from '../assets/arrow.svg'
import { styled } from 'styled-components'

const Button = ({ link, onClick, children }) => (
  link ? (
    <a href={link} target="_blank" rel="noreferrer" className='btn'>
      <span>
        {children}
        <img src={arrowIcon} alt="" className='icon' />
      </span>
    </a>
  ) : (
    <button onClick={onClick}>
      <span>
        {children}
      </span>
    </button>
  )
)

Button.propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Button