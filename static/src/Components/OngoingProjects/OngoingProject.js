import React,{Component} from'react';
import OngoingProjectComp from './OngoingProjectComp'
import "./OngoingProjectComp.css";

const project_list =[1,2,3,4,5,6]



const ProjectList=()=>
{

const PROJECTS=project_list.map((value,index)=>
{
  return(<OngoingProjectComp/>)
});

  return(
    <div className="ongoing-project">
    <div class="primary-head">
    ONGOING PROJECTS
    </div>
    <div className="project-box">
    {PROJECTS}
    </div>
    </div>
  )
}

export default ProjectList;