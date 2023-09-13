import PropTypes from 'prop-types';
import { Flex, Grid, Heading3, Text, Button } from './elements';
import { styled } from 'styled-components';

const StyledProject = styled.div`
  @media (min-width: 800px) {
    a {
      order: 2;
    }
  }
`;

const Project = ({ project }) => (
    <StyledProject>
      <Grid $align>
        <a href={project.liveLink} target="_blank" rel="noreferrer">
          <img src={project.image} alt="" width="100%" />
        </a>
        <Flex $col $top>
          <Heading3>{project.title}</Heading3>
          <Text>{project.desc}</Text>
          <Text $italic>Built with {project.builtWith.join(', ')}</Text>
          <Flex>
            <Button>Live Site</Button>
            <Button>GitHub</Button>
          </Flex>
        </Flex>
      </Grid>
    </StyledProject>
)

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    builtWith: PropTypes.array.isRequired,
    liveLink: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired
  })
}

export default Project;