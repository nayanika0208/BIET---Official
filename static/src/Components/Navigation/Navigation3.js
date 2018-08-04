import React, { Component } from 'react';
import mainLogo from "../BietLogo1.svg"
import './Navigation3.css';
import {NavLink} from 'react-router-dom';
import WOW from 'wow.js';//wow.js for animations
import Button from '../Buttons';


//navigation bar on scrolling 
const NavigationThree=()=> {
    return (
      <div className="wow fadeInX">
         <ul id="nav3">
            <li className="navlogo3" ><a href="#" ><img src={mainLogo} alt="Logo"/></a></li>
            <NavLink className="Nav-link Home3" to='/' > <Button text={"Home"} className=""/></NavLink>
            <NavLink className="Nav-link About3" to='/About' > <Button text={"About"} className="nav-font"/></NavLink>
            <NavLink className="Nav-link Project3" to='/OngoingProject' > <Button text={"Projects"} className=""/></NavLink>
            <NavLink className="Nav-link JoinNew3" to='/JoinNew' > <Button text={"Join"} className=""/></NavLink>
            </ul>

      </div>

      
    );
  
}

export default NavigationThree;