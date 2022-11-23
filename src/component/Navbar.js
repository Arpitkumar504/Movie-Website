import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaSearch, FaSignInAlt } from "react-icons/fa";
import { SiNetflix } from 'react-icons/si';
import { RiLoginCircleFill } from 'react-icons/ri';

function Navbar(props) {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', (e) => {
    const position = navbar.getBoundingClientRect().height;
    if (Math.floor(window.scrollY) > position) {
      navbar.classList.add('fixed');
      console.log('Fixed called');
    }
    else {
      navbar.classList.remove('fixed');
      console.log('Fixed removed');
    }
  })
  return (
    <div>
      <div className='navbar'>
        <NavLink to="/"><div className="navheading">
          <div>
            <SiNetflix className='navicons' />
          </div>
          <h1>{props.heading}</h1>
        </div></NavLink>
        <div className="side">
          <div className="buttons">
            <NavLink to="/login"><button type='button' className='login'><RiLoginCircleFill /> Log In</button></NavLink>
            <NavLink to="/signin"><button type='button' className='login'><FaSignInAlt />  Sign Up</button></NavLink>
          </div>
          <div className="button">
            <FaSearch className='icons' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar