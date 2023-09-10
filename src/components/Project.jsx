import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/Project.css';

const Project = ({ project }) => (
  <div className='Project grid aligned'>
    <div>
      <h3 className="mb-1">{project.title}</h3>
      <p className='mb-1'>{project.desc}</p>
      <p className='italic mb-1'>Built with {project.builtWith.join(', ')}</p>
      <div className="flex-row gap-1 align">
        <Button link={project.liveLink}>Live site</Button>
        <Button link={project.codeLink}>GitHub</Button>
      </div>
    </div>
    <a href={project.liveLink} target="_blank" rel="noreferrer" className='Project-img'>
      <img src={project.image} alt="" />
    </a>
  </div>
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

export default Project 