import './Form.css';
import LinkButtons from './LinkButtons';
import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setMessage] = useState("");

  const handleSubmit = (event:any) => {
    event.preventDefault();
    alert(`Name: ${name} | Email: ${email} | Message: ${textarea}`)
  }
    
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input 
          type='text'
          value={name}
          className= 'UserName'
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>Email:
        <input 
          type='text'
          value={email}
          className='UserEmail'
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <textarea value={textarea} className='UserMessage' required={true} minLength={10} onChange={(event) => setMessage(event.target.value)} />
      <input type="submit" className='SubmitButton' value='Submit' />
      <hr></hr>
      <div className='buttons-container'><LinkButtons LinkedIn='https://www.linkedin.com/in/jean-carlo-a591232a5/' GitHub='https://github.com/JC-Latino-2021' Resume='https://jeancarloweb.com/Jean-Carlo-Latoure-Resume.pdf' /></div>
    </form>
  )
}

export default MyForm