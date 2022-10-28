import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import Button from '../Button/Button';
import './contactForm.css'

const ContactForm = () => {
        const form = useRef();

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="input-container">
            <label className='label'    >Name</label>
            <input className='name-input' type="text" placeholder='Name' name="user_name" />
            <label className='label'   >Email</label>
            <input className='email-input' type="text" placeholder='Email' name="user_email" />
            <label  className='label'  >Message</label>
            <textarea className='message-input'  id="" cols="30" rows="10" placeholder='Message' name="message"></textarea>
        </div>
        <Button Title="Send" Type="submit" className="contact-btn"/>
    </form>
  )
}

export default ContactForm;