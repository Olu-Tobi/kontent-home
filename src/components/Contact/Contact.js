import React, { useRef } from 'react'
import "./Contact.css"
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_YOUR_SERVICE_ID}`, `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`)
      .then((result) => {
          console.log(result.text);
          alert("SUCCESS!")
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong!", error)
      });
  };
  return (
   <div id='contact' className="container contact-con">
   <h2>Send a Message</h2>
        <div className="con-form">
        <form ref={form} onSubmit={sendEmail} className='form-edit'>
          <input className='form-input' type="text" name='name' id='name' placeholder='Your Full name' required/>
          <input className='form-input' type="email" name='email' id='email' placeholder='Your Email' required/>
          <input className='form-input' type="text" name='subject' id='subject' placeholder='Subject' required/>
          <textarea className='form-input' name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" id='message' className='form-btn'>Send Message <SendIcon/></button>
        </form>
        </div>
   </div>
  )
}

export default Contact