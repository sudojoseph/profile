import {useState} from 'react'
import { Api } from '../../api/api';
import './ContactForm.css';

const api = new Api;

const ContactForm = () => {
    const [textFieldValue, setTextFieldValue] = useState('');

  const handleTextAreaChange = (e) => {
    setTextFieldValue(e.target.value);
  }

  const handleSubmit = async () => {
    try {
      const response = await api.sendMessageToTelegramBot(textFieldValue);
      alert(response.message);
    } catch (error) {
      alert(error.message);
    }
    setTextFieldValue('');
  };

  return (
    <div className='contact-form-container'>
        <p>Jarvis didn't tell you enough about me yet...? Or want to leave a comment?</p>
        <p>Write a message below and my Telegram Bot (R2-D2) will forward it to me!</p>
      <textarea value={textFieldValue} onChange={(e) => handleTextAreaChange(e)} placeholder={'leave me a message'} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ContactForm