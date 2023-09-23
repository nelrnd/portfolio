import { styled } from "styled-components";
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const StyledSection = styled.section`
  padding-top: 12rem;

  &:last-of-type {
    padding-bottom: 12rem;
  }
`;

const SectionContent = styled(motion.div)`
  width: var(--layout-width);
  margin: auto;

  @media (max-width: 800px) {
    width: 90vw;
  }
`;

const content = {
  offscreen: { y: 50, opacity: 0, scale: 0.99 },
  onscreen: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, type: 'easeIn' } },
}

const Section = ({ id, children }) => (
  <StyledSection id={id || ''}>
    <SectionContent variants={content} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
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