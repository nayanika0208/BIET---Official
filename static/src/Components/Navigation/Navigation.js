import React, { Component } from 'react';
import mainLogo from "../BietLogo1.svg"
import './Navigation.css';
import {NavLink} from 'react-router-dom';

const Navigation=()=> {

 
    return (
      <div >
         <ul id="nav1">
         <div className="leftPart">
            <li  className="Home"><a href="#" ><NavLink className="Nav-link " to='/' >Home </NavLink></a></li>
            <li  className="About"><a href="#" ><NavLink className="Nav-link" to='/About' >About </NavLink></a></li>
            </div>

            <li className="navlogo" ><a href="#" ><img src={mainLogo} alt="Logo"  className="half-circle"/></a></li>
            <div  className="rightPart">
            <li className="Project" ><a href="#" ><NavLink className="Nav-link" to='/OngoingProject'>Projects </NavLink></a></li>
            <li  className="JoinNew"><a href="#" ><NavLink className="Nav-link" to='/JoinNew' >Join </NavLink></a></li>
            <li  className="Blogs"><a href="#" ><NavLink className="Nav-link" to='/Blogs'> Blogs </NavLink></a></li>
            </div>
          </ul>

      </div>

      
    );
  
}

export default Navigation;
