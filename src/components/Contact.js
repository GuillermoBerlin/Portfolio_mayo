import React from 'react'
import "./Contact.css";
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { MdPlace } from 'react-icons/md';



function Contact() {
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
            <h1>A</h1>
            <h1>A</h1>
            <h1>A</h1>
            <h1>A</h1>
        </div>
        </div>

    </div>
  )
}

export default Contact
