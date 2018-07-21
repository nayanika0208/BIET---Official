import React,{Component} from'react';
import ProjectComp from './Project_Comp'
import "./Project_Comp.css";

const project_list =[1,2,3,4,5]

console.log(ProjectComp);


const ProjectDisplay=()=>
{

const proj=project_list.map((value,index)=>
{
  return(<ProjectComp/>)
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
