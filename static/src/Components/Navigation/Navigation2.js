import React, { Component } from 'react';
import mainLogo from "../BietLogo1.svg"
import './Navigation2.css';
import {NavLink} from 'react-router-dom';
import WOW from 'wow.js';//wow.js for animations

//navigation bar on scrolling 
const NavigationTwo=()=> {
    return (
      <div className="wow fadeInX">
         <ul id="nav2">
            <li className="navlogo2" ><a href="#" ><img src={mainLogo} alt="Logo"/></a></li>
            <li  className="Home2"><a href="#" ><NavLink className="Nav-link " to='/' >Home </NavLink></a></li>
            <li  className="About2"><a href="#" to='/About'><NavLink className="Nav-link" to='/About' >About </NavLink></a></li>
            <li className="Project2" ><a href="#" ><NavLink className="Nav-link" to='/OngoingProject'>Projects </NavLink></a></li>
            <li  className="JoinNew2"><a href="#" ><NavLink className="Nav-link" to='/JoinNew' >Join </NavLink></a></li>
            <li  className="Blogs2"><a href="#" ><NavLink className="Nav-link" to='/Blogs'> Blogs </NavLink></a></li>
          </ul>

      </div>

      
    );
  
}

export default NavigationTwo;