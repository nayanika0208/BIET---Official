import React,{Component} from'react';
import OngoingProjectComp from './OngoingProjectComp'
import "./OngoingProjectComp.css";

import { StickyContainer, Sticky } from 'react-sticky';
import Collapsebar from '../Home/Collapsebar';
import Logobar from '../Home/Logobar';

const project_list =[1,2,3,4,5]



const ProjectList=()=>
{

const PROJECTS=project_list.map((value,index)=>
{
  return(<OngoingProjectComp/>)
});

  return(

     <div>
        <Logobar/>
        <StickyContainer >
        <Sticky>{({ style,isSticky,wasSticky })=>(<Collapsebar style={style}  isSticky={isSticky} wasSticky={wasSticky}/>)}</Sticky>
        
    <div className="ongoing-project">
    <div class="Primary-head">
    ONGOING PROJECTS
    </div>
    <div className="project-box">
    {PROJECTS}
    </div>
    </div>

    </StickyContainer>
    </div>
  )
}

export default ProjectList;