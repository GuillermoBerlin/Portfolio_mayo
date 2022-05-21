import React, { useRef, useState, useEffect } from 'react';
import "./Contact.css";
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { MdPlace } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';



function Contact() {

// Validation

const initialValues = {username:"", email:"", message:""};
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
}

useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

const validate = (values) => {
    const errors = {};
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
        errors.username = "Please enter a name"
    }
    if (!values.email) {
        errors.email = "Please enter an email"
    } else if (!regex.test(values.email))
        errors.email = "Please enter a valid email"
    if (!values.message) {
        errors.message = "Please enter a message"
    }
    return errors;
}

//

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const form = useRef();

// Submit

    const sendEmail = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
  
// Emailjs Library

    
    emailjs.sendForm('service_9gxaxrz', 'template_asddxgw', form.current, 'QHrkOSHRALGIK7BA_')
        .then((result) => {
            console.log(result.text);
            handleClick();
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
     
    

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
            <div className="divError"><p> {formErrors.username}</p></div>

                <div className='form'>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="username" 
                        className='input_' 
                        value={ formValues.username }
                        onChange={handleChange}
                    />
                </div> 
                <div className="divError"><p> {formErrors.email}</p></div>   
                <div className='form'>
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email" 
                        className='input_' 
                        value={ formValues.email }
                        onChange={handleChange}
                    />
                </div> 
                <div className="divError"><p> {formErrors.message}</p></div>  
                <div className='form_message'>
                    <label>Message</label>
                    <textarea 
                        name="message" 
                        className='input_menssage' 
                        value={ formValues.message } 
                        onChange={handleChange}
                    />
                     
                <div className={click? "enviado" : "escondido"}>
                    <p>Message sent</p><FaCheck className="cosito" />
                </div>
                <div className={click? "escondido" : "cubo"}>
                </div>
                    <button type="submit" value="Send" className="boton" >SEND</button>
                </div>  
            </form>
        </div>
        </div>

    </div>
  )
}

export default Contact
