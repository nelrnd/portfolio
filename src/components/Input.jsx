import PropTypes from 'prop-types'
import { styled } from "styled-components";

const StyledTextInput = styled.input`
  color: var(--color-950);
  font-size: 1rem;
  font-weight: 500;
  line-height: 160%;
  display: block;
  width: 100%;
  background-color: var(--color-50);
  padding: 0.625rem 1.625rem;
  border: none;
  border-radius: 1rem;

  &::placeholder {
    color: var(--color-650);
  }

  &:focus {
    outline: solid 2px var(--color-350);
  }

  .dark & {
    color: var(--color-50);
    background-color: var(--color-900);
  }

  .dark &::placeholder {
    color: var(--color-350);
  }
`;

const StyledTextArea = styled(StyledTextInput).attrs({ as: 'textarea'} )`
  height: 8.25rem;
  resize: none;
`;

const HiddenLabel = styled.label`
  position: absolute;
  transform: scale(0);
`;

const TextInput = ({ type, name, placeholder, value, setValue }) => (
  <>
    <HiddenLabel for={name}>{name}</HiddenLabel>
    <StyledTextInput type={type || 'text'} nale={name} id={name} value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
  </>
)

const TextArea = ({ name, placeholder, value, setValue}) => (
  <>
    <HiddenLabel for={name}>{name}</HiddenLabel>
    <StyledTextArea name={name} id={name} value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)}></StyledTextArea>
  </>
)

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
}

export { TextInput, TextArea }