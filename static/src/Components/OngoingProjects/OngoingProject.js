import React,{Component} from'react';
//single ongoing project component
import OngoingProjectComp from './OngoingProjectComp';
import "./OngoingProjectComp.css";//stylesheet
import { Parallax, Background } from 'react-parallax'




import NavigationThree from '../Navigation/Navigation3.js';//navigation bar 
import Pagefooter from '../PageFooter/PageFooter.js';//footer on each page



const project_list =[{Title:"CHITKARAM", Summary:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate", 

Description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit"},

{Title:"KAII", Summary:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate", 

Description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elit"},

{Title:"CATCH FIBRE", Summary:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate", 

Description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elit"}];






const PROJECTS=project_list.map((value,index)=>
{
  return(<OngoingProjectComp Title={value.Title} Summary={value.Summary} Description={value.Description} Index={index+1} />)
});

const ProjectList=()=>
{

  return(

     <div>
        
        <NavigationThree/>
        <Parallax
        blur={{ min: -5, max:10}}
        bgImage={require('./Images/paral1.jpg')}
        strength={100}
        bgClassName="ongoing-box">
        
              <div className="ongoing-project">
        <div class="Primary-head ongoing_primary_head">
        Ongoing Projects
        </div>
        <div className="project-box">
        {PROJECTS}
    </div>
    </div>
    </Parallax>
    <Pagefooter/>
   
    </div>
  )
}

export default ProjectList;