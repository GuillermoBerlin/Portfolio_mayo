import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="home_" 
                className="nav-logo"
                smooth={true}
                duration={1000}
                offset={-80}
          >
            Guillermo Lescano   
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                
                to="home_"
                smooth={true}
                duration={1000}
                offset={-80}
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                
                to="about_me"
                smooth={true}
                duration={1000}
                offset={-80}
                className="nav-links"
                onClick={handleClick}
              >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                
                to="projects_"
                smooth={true}
                duration={1000}
                offset={-80}
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                
                to="contact_"
                smooth={true}
                duration={1000}
                offset={-80}
                className="nav-links-contact"
                onClick={handleClick}
              >
                Contact 
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
