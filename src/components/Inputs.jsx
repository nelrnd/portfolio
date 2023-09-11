import { styled } from "styled-components";

const TextInput = styled.input`
  &[type="text"], &[type="email"] {
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

    &:placeholder {
      color: var(--color-650);
    }

    &:focus {
      outline: solid 2px var(--color-350);
    }
  }
`;

const TextArea = styled.textarea`
  color: var(--color-950);
  font-size: 1rem;
  font-weight: 500;
  line-height: 160%;
  display: block;
  width: 100%;
  height: 8.25rem;
  resize: none;
  background-color: var(--color-50);
  padding: 0.625rem 1.625rem;
  border: none;
  border-radius: 1rem;

  &:placeholder {
    color: var(--color-650);
  }

  &:focus {
    outline: solid 2px var(--color-350);
  }
`;

const HiddenLabel = styled.label`
  position: absolute;
  transform: scaleY(0);
`

const TextInput = ({type, name, value, setValue}) => (
  <>
    <HiddenLabel for={name}>{name}</HiddenLabel>
    <input 
      type={type || "text"} 
      id={name} name={name} 
      placeholder={name.toUppercase()} 
      value={value} 
      onChange={(e) => setValue(e.target.value)}
    />
  </>
)