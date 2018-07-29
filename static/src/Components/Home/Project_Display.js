import React,{Component} from'react';
import ProjectComp from './Project_Comp'
import "./Project_Comp.css";

//importing the image for all projecs//
import img1 from './img1.jpg';



const project_list =[{title:"Chitrakam",summary:"The home-grown,cheetah inspired robotic limb system"},
{title:"Kaii",summary:"Active upper limb prosthetics for the masses"},
{title:"Catch-Fibre",summary:"Laundry ball for mitigating micro-fibre pollution and machine scaling."}];


console.log(ProjectComp);


const ProjectDisplay=()=>
{

const proj=project_list.map((value,index)=>
{
  return(<ProjectComp title={value.title} summary={value.summary} index={index+1}  />)
});

  return(
    <div>
    <div class="Secondary-head">
    ONGOING PROJECTS
    </div>
    <div className="project-box">
    {proj}
    </div>
    </div>
  )
}

export default ProjectDisplay;
