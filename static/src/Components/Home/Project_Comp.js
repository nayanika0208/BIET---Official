import React,{Component} from 'react';

import './Project_Comp.css';

import prog from './proj.jpg';
import{Glyphicon} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';



//import { url } from 'inspector';

//ongoing projects section on the home page


const ProjectComp =({title,summary,index}) =>

{



  return(

    <div className="proj_image wow fadeIn zoomIn" data-wow-delay='0.3s'>
    <div className="Side-1">
    <img src={require(`./Images/img${index}.jpg`)} alt="project-image"  className="front-face" backgroundSize="cover" height="100%" width="100%"/> 
      <div className="Side-2">
      <p className="proj_title">{summary} </p>
    <a href="#"><NavLink  to='/OngoingProject'><button class="Proj_Details_button">Know More <span>  <Glyphicon glyph="menu-right" /> </span>  </button></NavLink> </a> 
    </div>
    </div>
    <div className="home_proj_name">
      <p>{title}</p>
      </div>
      </div>
      
    )

}
export default ProjectComp;

