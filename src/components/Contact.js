import React, { useRef, useState } from 'react';
import "./Contact.css";
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { MdPlace } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';



function Contact() {

    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
    emailjs.sendForm('service_9gxaxrz', 'template_asddxgw', form.current, 'QHrkOSHRALGIK7BA_')
        .then((result) => {
            console.log(result.text);
            handleClick();
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  
    

  return (
    <div className="ContactContainer" id="contact_">
      <h1>CONTACT</h1>
        <div className='contact_content'>
            <div className="contact_left">
                <div className='elementos_left'><div className="iconos"><BsTelephoneFill /></div>987654321</div>
                <div className='elementos_left'><div className="iconos"><MdEmail /></div>guillermo.3@hotmail.com.ar</div>
                <div className='elementos_left'><div className="iconos"><MdPlace /></div>Berlin, Germany</div>
            </div>
            <div className="contact_right">
            <form ref={form} onSubmit={sendEmail}>
                <div className='form'>
                    <label>Name</label>
                    <input type="text" name="name" className='input_'/>
                </div>    
                <div className='form'>
                    <label>Email</label>
                    <input type="email" name="email" className='input_'/>
                </div>  
                <div className='form_message'>
                    <label>Message</label>
                    <textarea name="message" className='input_menssage' />
                    <button type="submit" value="Send" className={click ? "escondido" : "boton"} >SEND</button>
                </div>  
                <div className={click? "enviado" : "escondido"}>
                    <FaCheck className="cosito" />
                </div>
                   
            </form>
        </div>
        </div>

    </div>
  )
}

export default Contact
