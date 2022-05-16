import React, { Link } from 'react';
import "./Cover.css"; 
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


function Cover() {
  return (
    
    <div className="container" id="home_">
      <div className="container2">
        <div className="text">
          <h1>Hi! I'm Guillermo</h1>
          <h3> Full Stack Web Developer</h3>
          <div className="iconitos">
          <a href="https://github.com/GuillermoBerlin" target="_blank"><BsGithub className="git" size={30}/></a> 
          <a href="https://www.linkedin.com/in/guillermo-lescano/" target="_blank"><BsLinkedin className="linkedin" size={30}/></a>
          </div>
        </div>
      </div>  
    </div>
    
  )
}

export default Cover
