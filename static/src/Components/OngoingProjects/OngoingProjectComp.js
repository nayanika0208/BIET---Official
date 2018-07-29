import React,{Component} from 'react';
import image from './img1.jpg';
import './OngoingProjectComp.css';
import{Glyphicon} from 'react-bootstrap';

const moveRight=(e)=>{
  
 e.target.parentNode.parentNode.style.opacity="0";

 e.target.parentNode.parentNode.parentNode.childNodes[2].style.transform="translateX(0%)";
  console.log(e.target.parentNode.parentNode)
}
const moveLeft=(e)=>{
   console.log(e.target.parentNode.parentNode.parentNode.childNodes[1])
   // e.target.parentNode.parentNode.style.opacity="1";
    e.target.parentNode.parentNode.parentNode.childNodes[1].style.opacity="1";
   e.target.parentNode.parentNode.parentNode.childNodes[2].style.transform="translateX(100%)";
}


//import { url } from 'inspector';
const OngoingProjectComp =({Title,Summary,Description,Index}) =>
{
  return(
    <div class="project_component">
    <div className="project_image shadow-5">
    <div className="main">
    <img src={require(`./Images/img${Index}.jpg`)} alt="project-image" height="100%" width="100%" className="front-face"/> 
    <div className="first-display"> 
      <div className="info">
       <div className="details">
       <div className="project_details">
       <h1>{Title}</h1>
      <p>
      {Summary}
      </p>
      <a href="#"> <button class="Details_button">Join Project <span>  <Glyphicon glyph="menu-right" /> </span>  </button> </a>
      </div>

      </div>
      </div>
     <div className="side_logo">
      <img src={require(`./Logo/Logo${Index}.png`)} alt="project-image"  className="img2"/>
     </div>
     <button className="arrow-button" onClick={moveRight}><Glyphicon glyph="menu-right" /> </button>
     </div>
     <div className="second-display">
     <div className="info2">
       <div className="project_details">
       <h1>{Title}</h1>
      <p >
      {Description}
      </p>
      <a href="#"> <button class="Details_button">Join Project <span>  <Glyphicon glyph="menu-right" /> </span>  </button> </a>
      </div>
      </div>
      <button className="arrow-button-left" onClick={moveLeft}><Glyphicon glyph="menu-left" /> </button>
     </div>
      </div>
      </div>

      </div>
  )
}
export default OngoingProjectComp;