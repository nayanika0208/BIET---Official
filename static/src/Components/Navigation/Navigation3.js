import React, { Component } from 'react';
import mainLogo from "../BietLogo1.svg"
import './Navigation3.css';
import {NavLink} from 'react-router-dom';
import WOW from 'wow.js';//wow.js for animations

//navigation bar on scrolling 
const NavigationThree=()=> {
    return (
      <div className="wow fadeInX">
         <ul id="nav3">
            <li className="navlogo3" ><a href="#" ><img src={mainLogo} alt="Logo"/></a></li>
            <li  className="Home3"><a href="#" ><NavLink className="Nav-link " to='/' >Home </NavLink></a></li>
            <li  className="About3"><a href="#" to='/About'><NavLink className="Nav-link" to='/About' >About </NavLink></a></li>
            <li className="Project3" ><a href="#" ><NavLink className="Nav-link" to='/OngoingProject'>Projects </NavLink></a></li>
            <li  className="JoinNew3"><a href="#" ><NavLink className="Nav-link" to='/JoinNew' >Join </NavLink></a></li>
          </ul>

      </div>

      
    );
  
}

export default NavigationThree;