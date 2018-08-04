import React, { Component } from 'react';
import mainLogo from "../BietLogo1.svg"
import './Navigation2.css';
import {NavLink} from 'react-router-dom';
import Button from '../Buttons';

import WOW from 'wow.js';//wow.js for animations

//navigation bar on scrolling 
const NavigationTwo=()=> {
    return (
      <div className="wow fadeInX">
         <ul id="nav2">
            <li className="navlogo2" ><a href="#" ><img src={mainLogo} alt="Logo"/></a></li>
            <NavLink className="Nav-link Home2" to='/' > <Button text={"Home"} className=""/></NavLink>
            <NavLink className="Nav-link About2" to='/About' > <Button text={"About"} className="nav-font"/></NavLink>
            <NavLink className="Nav-link Project2" to='/OngoingProject' > <Button text={"Projects"} className=""/></NavLink>
            <NavLink className="Nav-link JoinNew2" to='/JoinNew' > <Button text={"Join"} className=""/></NavLink>
            </ul>

      </div>

      
    );
  
}

export default NavigationTwo;