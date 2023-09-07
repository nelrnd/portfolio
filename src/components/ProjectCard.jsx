import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, desc, img, builtWith, liveLink, codeLink } = project;

  return (
    <div className='ProjectCard'>
      <a href={liveLink} target="_blank" rel="noreferrer">
        <img src={img} alt="" />
      </a>

      <div className='text-wrapper'>
        <h3>{title}</h3>
        <p className='desc'>{desc}</p>
        <p className='built-with'>Built with {builtWith.join(', ')}</p>
        <div className='btn-row'>
          <a href={liveLink} target="_blank" className='btn' rel="noreferrer">Live Site</a>
          <a href={codeLink} target="_blank" className='btn' rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;