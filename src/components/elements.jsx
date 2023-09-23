import { styled } from "styled-components";

export const Headline = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  line-height: 120%;
  color: var(--color-950);
  @media (max-width: 800px) {
    font-size: 3rem;
  }
  .dark & {
    color: var(--color-50);
  }
`;

export const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 120%;
  color: var(--color-950);
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  .dark & {
    color: var(--color-50);
  }
`

export const Heading3 = styled(Heading2).attrs({ as: 'h3' })`
  font-size: 1.5rem;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  font-size: ${props => props.$large ? '1.5rem' : '1rem'};
  font-weight: 400;
  font-style: ${props => props.$italic ? 'italic' : 'normal'};
  line-height: 170%;
  color: var(--color-650);
  .dark & {
    color: var(--color-350);
  }
`;

export const Button = styled.button`
  display: block;
  width: ${props => props.$large ? '100%' : 'fit-content'};
  padding: 0.625rem 1.625rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  line-height: 160%;
  color: var(--color-100);
  background-color: var(--color-950);
  border: none;
  border-radius: 1rem;
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
  .dark & {
    border: solid 0.15rem var(--color-350);
    color: ${props => props.$primary ? 'var(--color-950)' : 'var(--color-50)'};
    background-color: ${props => props.$primary ? 'var(--color-50)' : 'transparent'};
  }
`;

export const IconButton = styled.button`
  display: block;
  overflow: hidden;
  width: 2rem;
  height: 2rem;
  margin: -1rem 0;
  background-color: var(--color-1000);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  img, svg {
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    outline: solid 0.15rem var(--color-650);
  }
  &:focus {
    outline: solid 0.1rem var(--color-0)
  }
`;

export const Link = styled.a`
  font-weight: 500;
  text-decoration: underline;
  color: var(--color-900);
  &:hover {
    color: var(--color-650);
  }
  .dark & {
    color: var(--color-100);
  }
  .dark &:hover {
    color: var(--color-350);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: ${props => props.$align ? 'center' : 'start'};
  gap: 1.25rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-content: stretch;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.$col ? 'column' : 'row'};
  justify-content: ${props => props.$spaced ? 'space-between' : 'flex-start'};
  align-items: ${props => props.$col ? 'stretch' : 'center'};
  gap: ${props => `var(--${props.$gap || 'm'})`}
`;