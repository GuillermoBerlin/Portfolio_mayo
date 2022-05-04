import React, { useState } from "react";
import { NavLink, } from "react-router-dom";
import { Link } from "react-scroll";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Guillermo Lescano   
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="home_"
                activeClassName="active"
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
                exact
                to="about_me"
                smooth={true}
                duration={1000}
                offset={-80}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="projects_"
                smooth={true}
                duration={1000}
                offset={-80}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="contact_"
                smooth={true}
                duration={1000}
                offset={-80}
                activeClassName="active"
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
