import React,{Component} from 'react';
import prog from './proj.jpg';
import './Project_Comp.css';
import{Glyphicon} from 'react-bootstrap';


//import { url } from 'inspector';
const ProjectComp =({title,summary,index}) =>
{



  return(
    <div class="proj_component">
    <div className="proj_image">
    <div className="Side-1">
    <img src={require(`./Images/img${index}.jpg`)} alt="project-image"  className="front-face" backgroundSize="cover" height="100%" width="100%"/> 
      <div className="Side-2">
      <p className="proj_title">{summary} </p>
    <a href="#"> <button class="Proj_Details_button">Know More <span>  <Glyphicon glyph="menu-right" /> </span>  </button> </a> 
    </div>
    </div>
    <div className="proj_name">
      <p>{title}</p>
      </div>
      </div>
      </div>
    )
}
export default ProjectComp;

