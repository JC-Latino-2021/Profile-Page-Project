import './LinkButtons.css';

interface LinkButtonProps {
  LinkedIn: "https://www.linkedin.com/in/jean-carlo-a591232a5/";
  GitHub: "https://github.com/JC-Latino-2021";
  Resume: "https://jeancarloweb.com/Jean-Carlo-Latoure-Resume.pdf";
}

const LinkButtons = ({LinkedIn, GitHub, Resume}: LinkButtonProps) => {
  return (
    <div>      
      <a href={LinkedIn} className='button LinkedIn-button' target='_blank'>LinkedIn</a>
      <a href={GitHub} className='button GitHub-button' target='_blank'>GitHub</a>
      <a href={Resume} className='button Resume-button' target='_blank'>Resume</a>
      {}
    </div>
  )
}

export default LinkButtons