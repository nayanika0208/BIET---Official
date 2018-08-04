import React from 'react';
import './Buttons.css';


const Button=({text})=>
{

  return(
    <div className="svg-wrapper">
    <svg height="60px" width="105px" xmlns="http://www.w3.org/2000/svg">
    <rect className="shape" height="60" width="100px" />
    </svg>
    <div className="text">{text}</div>
   </div>)
  }



export default Button;