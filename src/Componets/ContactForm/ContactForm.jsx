import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import Button from '../Button/Button';
import './contactForm.css'

const ContactForm = () => {
        const form = useRef();

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm("service_1cy2l06", "template_zlwnyet", form.current, "f9mlc2XpJXwz0bUxr")
            .then((result) => {
                console.log(result.text);
                alert("Your Email Has been Send")
                
            }, (error) => {
                console.log(error.text);
                alert("Something went wrong retry")
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
        <Button Title="Send" Type="submit" className="contact-btn" />
    </form>
  )
}

export default ContactForm;