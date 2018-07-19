import React,{Component} from 'react';
import image from './img1.jpg';
import image2 from './img2.jpg';
import './OngoingProjectComp.css';
import{Glyphicon} from 'react-bootstrap';

//import { url } from 'inspector';
const OngoingProjectComp =() =>
{
  return(
    <div class="project_component">
    <div className="project_image shadow-5">
    <div className="main">
    <img src={image} alt="project-image" height="100%" width="100%" className="front-face"/> 
      <div className="info">
       <div className="details">
       <div className="project_details">
       <h1>ProjectName</h1>
      <p >
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
      </p>
      <a href="#"> <button class="Details_button">Know More <span>  <Glyphicon glyph="menu-right" /> </span>  </button> </a>
      </div>
      </div>
      </div>
     <div className="side_logo">
      <img src={image2} alt="project-image"  className="img2"/>
     </div>
      </div>
      </div>

      </div>
  )
}
export default OngoingProjectComp;