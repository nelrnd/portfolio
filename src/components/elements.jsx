import { styled } from "styled-components";

const Headline = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  line-height: 120%;
  color: var(--color-950);
`;

const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 120%;
  color: var(--color-950);
`

const Heading3 = styled(Heading2).attrs({ as: 'h3' })`
  font-size: 1.5rem;
`;

const Text = styled.p`
  font-size: ${props => props.$large ? '1.5rem' : '1rem'};
  font-weight: 400;
  font-style: ${props => props.$italic ? 'italic' : 'normal'};
  line-height: 170%;
  color: var(--color-650);
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  line-height: 160%;
  color: var(--color-100);
  background-color: var(--color-950);
  padding: 0.625rem 1.625rem;
  border: none;
  border-radius: 1rem;
  display: block;
  width: ${props => props.$large ? '100%' : 'fit-content'};
  cursor: pointer;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem
  }

  &:hover {
    color: var(--color-100);
    opacity: 0.9;
  }

  &:focus {
    outline: solid 0.15rem var(--color-350);
  }
`;

const Link = styled.a`
  font-weight: 500;
  text-decoration: underline;
  color: var(--color-900);

  &:hover {
    color: var(--color-650);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.$col ? 'column' : 'row'};
  justify-content: ${props => props.$spaced ? 'space-between' : 'flex-start'};
  align-items: center;
  gap: ${props => `var(--${props.$gap || 'm'})`}
`;

export {
  Headline,
  Heading2,
  Heading3,
  Text,
  Button,
  Link,
  Grid,
  Flex
}