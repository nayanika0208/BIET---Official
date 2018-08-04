import React,{Component} from'react';
import ProjectComp from './Project_Comp'
import "./Project_Comp.css";
//importing the image for all projecs//
import img1 from './img1.jpg';



const project_list =[{title:"chitrakam",summary:"The home-grown,cheetah inspired robotic limb system"},
{title:"kaii",summary:"Active upper limb prosthetics for the masses"},
{title:"catch-fibre",summary:"Laundry ball for mitigating micro-fibre pollution and machine scaling."}];




const ProjectDisplay=()=>
{

const proj=project_list.map((value,index)=>
{
  return(<ProjectComp title={value.title} summary={value.summary} index={index+1}  />)
});

  return(
    <div>
    <div class="Secondary-head ongoing_secondary_head wow fadeIn">
    Ongoing Projects
    </div>
    <div className="project-box">
    {proj}
    </div>
    </div>
  )
}

export default ProjectDisplay;
