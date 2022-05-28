import React, { useRef, useState, useEffect } from 'react';
import "./Contact.css";
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { MdPlace } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {

    const initialValues = {username:"", email:"", message:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    

    let validCaptcha = false;
    const validateCaptcha = () => {
        validCaptcha = true
    }

    const handleChange = (e) => { 
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }


    const validate = (values) => {
        const errors = {};
        const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Please enter a name."
        }
        if (!values.email) {
            errors.email = "Please enter an email."
        } else if (!regex.test(values.email))
            errors.email = "Please enter a valid email adress."
        if (!values.message) {
            errors.message = "Please enter a message."
        }
        return errors;
    }

//

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const form = useRef();

// Submit

    
    const submitForm = (e) => {
        e.preventDefault();
        const algo = validate(formValues)
            if ( Object.keys(algo).length === 0 && validCaptcha) {
            sendEmail(e)
            }else {
            setFormErrors(validate(formValues));
        }
    }
    

    const sendEmail = (e) => {
        emailjs.sendForm('service_9gxaxrz', 'template_asddxgw', form.current, 'QHrkOSHRALGIK7BA_')
            .then((result) => {
                console.log(result.text);
                handleClick();
            }, (error) => {
                console.log(error.text);
            });
            setFormValues(initialValues);
            setFormErrors({});
    }
     
    
  return (
    <div className="ContactContainer" id="contact_">
      <h1>CONTACT</h1>
        <div className='contact_content'>
            
            <div className="contact_left">
                <div className='elementos_left'><div className="iconos"><BsTelephoneFill /></div>+49 1573 7829125</div>
                <div className='elementos_left'><div className="iconos"><MdEmail /></div>3.guillermo.lescano@gmail.com</div>
                <div className='elementos_left'><div className="iconos"><MdPlace /></div>Berlin, Germany</div>
            </div>
            
            <div className="contact_right">
                <form ref={form} onSubmit={submitForm}>
                
                    <div className='form'>
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="username" 
                            className='input_' 
                            value={ formValues.username }
                            onChange={handleChange}
                        />
                        <div id="divError"><p> {formErrors.username}</p></div>    
                    </div> 
                
                    <div className='form'>
                        <label>Email</label>
                        <input 
                            type="text"
                            name="email" 
                            className='input_' 
                            value={ formValues.email }
                            onChange={handleChange}
                         />
                        <div id="divError"><p> {formErrors.email}</p></div>
                    </div> 
                
                    <div className='form_message'>
                        <label>Message</label>
                        <textarea 
                            name="message" 
                            className='input_menssage' 
                            value={ formValues.message } 
                            onChange={handleChange}
                        />
                        <div id="divError"><p> {formErrors.message}</p></div>     
                        <div className={click? "enviado" : "escondido"}>
                            <p>Message sent</p><FaCheck className="cosito" />
                        </div>
                        <div className={click? "escondido" : "cubo"}>
                        </div>
                        <button type="submit" value="Send" className="boton" >SEND</button>
                    </div> 
                    <div className='captcha'>
                    <ReCAPTCHA
                        sitekey="6LfLzBcgAAAAAMkmar7TQ0njxYq1Na8mksZXcYKV"
                        onChange={validateCaptcha}
                    /> 
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact
