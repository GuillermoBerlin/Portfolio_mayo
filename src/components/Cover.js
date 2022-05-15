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
          <BsGithub className="git" size={30}/> 
          <BsLinkedin className="linkedin" size={30}/>
          </div>
        </div>
      </div>  
    </div>
    
  )
}

export default Cover
