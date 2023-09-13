import PropTypes from 'prop-types'
import { styled } from 'styled-components';

const StyledSection = styled.section`
  padding-top: 12rem;

  &:last-of-type {
    padding-bottom: 12rem;
  }
`;

const SectionContent = styled.div`
  width: var(--layout-width);
  margin: auto;

  @media (max-width: 800px) {
    width: 90vw;
  }
`;

const Section = ({ id, children }) => (
  <StyledSection id={id || ''}>
    <SectionContent>
      {children}
    </SectionContent>
  </StyledSection>
)

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Section;
export { SectionContent };