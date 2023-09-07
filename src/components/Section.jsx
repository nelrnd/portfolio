import './Section.css';

const Section = ({ children }) => (
  <section className='Section'>
    <div className="Section_content">
      {children}
    </div>
  </section>
)

export default Section;