import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/Project.sass';

const Project = ({ project }) => (
  <div className='Project grid align'>
    <div>
      <h3>{project.title}</h3>
      <p className='mgb-1'>{project.desc}</p>
      <p className='italic mgb-1_5'>Built with {project.builtWith.join(', ')}</p>
      <div className="flex-row gap-1 align">
        <Button link={project.liveLink}>Live site</Button>
        <Button link={project.codeLink}>GitHub</Button>
      </div>
    </div>
    <a href={project.liveLink} target="_blank" rel="noreferrer" className='Project_img-wrapper'>
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