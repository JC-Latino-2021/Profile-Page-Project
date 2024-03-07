import './Contact.css';
import LinkButtons from './LinkButtons';
import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setMessage] = useState("Write a Message");

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
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Email:
        <input 
          type='text'
          value={email}
          className='UserEmail'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <textarea value={textarea} className='UserMessage' onChange={(e) => setMessage(e.target.value)} />
      <input type="submit" className='SubmitButton' value='Submit' />
      <hr></hr>
      <div className='buttons-container'><LinkButtons/></div>
    </form>
  )
}


export default MyForm