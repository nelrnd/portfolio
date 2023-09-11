import PropTypes from 'prop-types'

const TextInput = ({ name, type, value, setValue }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      {type === 'area' ? (
        <textarea id={name} placeholder={name} value={value} onChange={(e) => setValue(e.target.value)}></textarea>
      ) : (
        <input type={type} id={name} name={name} placeholder={name} value={value} onChange={(e) => setValue(e.target.value)} />
      )}
    </div>
  )
}


const TextInput = ({type, name, value, setValue}) => (
  <Text
)

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
}

export default TextInput;