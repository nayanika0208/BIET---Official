import React,{Component} from'react';
//single ongoing project component
import OngoingProjectComp from './OngoingProjectComp';
import "./OngoingProjectComp.css";//stylesheet


import Navigation from '../Navigation/Navigation.js';//main navigation bar
import NavigationTwo from '../Navigation/Navigation2.js';//navigation bar on scroll
import Pagefooter from '../PageFooter/PageFooter.js';//footer on each page


const project_list =[1,2,3,4,5]


const ProjectList=()=>
{

const PROJECTS=project_list.map((value,index)=>
{
  return(<OngoingProjectComp/>)
});

  return(

     <div>
        <Navigation/>
        <NavigationTwo/>
        <div className="ongoing-box" style={{marginTop:"17vh"}}>
        <div className="ongoing-project">
        <div class="Primary-head">
        ONGOING PROJECTS
        </div>
        <div className="project-box">
        {PROJECTS}
    </div>
    </div>
    </div>
    <Pagefooter/>
   
    </div>
  )
}

export default ProjectList;