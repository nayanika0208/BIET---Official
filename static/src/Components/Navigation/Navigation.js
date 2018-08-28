//main navigation bar
import React from 'react';
import mainLogo from "../BietLogo1.svg"
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import Button from '../Buttons';

//main Navigation Bar
const Navigation=()=> {
    return (
      <div >
        <div className="temp-box">
        </div>
           <ul id="nav1">

             {/* <label for="toggle" class="toggle_bar">&#9776;</label>
             <input type="checkbox" id="toggle"/> */}


                 <NavLink className="Nav-link Home" to={`/`} > <Button text={"Home"} className=""/></NavLink>
                 <NavLink className="Nav-link About" to={`/About`} > <Button text={"About"} className="nav-font"/></NavLink>
                 <li className="navlogo" ><img src={mainLogo} alt="Logo"  className="half-circle"/></li>
                 <NavLink className="Nav-link Project" to={`/OngoingProject`} > <Button text={"Projects"} className=""/></NavLink>
                 <NavLink className="Nav-link JoinNew" to={`/JoinNew`} > <Button text={"Join"} className=""/></NavLink>

          </ul>
      </div>
 );
}

export default Navigation;
