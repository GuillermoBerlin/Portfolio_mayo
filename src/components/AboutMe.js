import React from 'react';
import "./AboutMe.css"; 

function AboutMe() {
  return (
    <div className="AboutMeContainer" id="about_me">
       
      <div className="AboutMeTexts">   
        <h3>Let me tell you something about me</h3>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
      </div> 
      <div className="AboutMePictureDiv">
        <img src="pp.jpg" className="AboutMePicture" />
      </div>   
    </div>
  )
}

export default AboutMe
