import React, { Component } from 'react';
import mainLogo from "../BietLogo1.svg"
import './Navigation.css';
import {NavLink} from 'react-router-dom';

const Navigation=()=> {

 
    return (
      <div >
         <ul class="nav">
         <div>
            <li  ><a href="#" ><NavLink className="Nav-link" to='/' >Home </NavLink></a></li>
            <li  ><a href="#" to='/About'><NavLink className="Nav-link" to='/About' >About </NavLink></a></li>
            </div>

            <li className="navlogo" ><a href="#" ><img src={mainLogo} alt="Logo"  className="half-circle"/></a></li>
            <div style={{float:"right"}}>
            <li  ><a href="#" ><NavLink className="Nav-link" to='/OngoingProject'>Projects </NavLink></a></li>
            <li  ><a href="#" ><NavLink className="Nav-link" to='/JoinNew' >Join </NavLink></a></li>
            <li  ><a href="#" ><NavLink className="Nav-link" to='/Blogs'> Blogs </NavLink></a></li>
            </div>
          </ul>

      </div>

      
    );
  
}

export default Navigation;
