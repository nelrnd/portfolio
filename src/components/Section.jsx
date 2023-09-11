import PropTypes from 'prop-types'
import { styled } from 'styled-components';

const StyledSection = styled.section`
  padding-top: 8rem;

  &:last-of-type {
    padding-bottom: 8rem;
  }
`;

const SectionContent = styled.div`
  width: var(--layout-width);
  margin: auto;
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