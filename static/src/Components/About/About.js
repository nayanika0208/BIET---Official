import React,{Component} from 'react';
import Acomp from './a-member/member_comp';
import Bcomp from './b-member/member_comp';
import Ccomp from './c-member/member_comp';
import './About.css';
import Pagefooter from '../PageFooter/PageFooter.js';
import Navigation from '../Navigation/Navigation.js';//main navigation bar
import NavigationThree from '../Navigation/Navigation3.js';//navigation bar on scroll
import { Parallax, Background } from 'react-parallax'

//import pictures of logo
import DSIR from './DSIR.png';
import DST from './DST.png';
import ICMR from './ICMR.jpg';
import VIT from './VIT.png';

import WOW from 'wow.js';//for animations



const a_members=[
  {name:"Sayan",designation:"Team-Manager"},
  {name:"Elton",designation:"Team-Leader"}];

const b_members=[
{name:"Tharun",designation:"member"},
{name:"delete",designation:"Member"},
{name:"delete",designation:"Member"},
{name:"Aman",designation:"Member"}, 
{name:"Deepanshu",designation:"Member"}, 
{name:"Prithviraj",designation:"Member"},
{name:"Ashish",designation:"Member"} 
]



const a_display = a_members.map((element,index)=>
{
  return(
    <Acomp name={element.name} designation={element.designation} index={index+1} />
  )
})


const b_display = b_members.map((element,index)=>
{
  return(
    <Bcomp name={element.name} designation={element.designation} index={index+1} />
  )
})


class About extends Component
{





  render()
  {

  return(
    <div>
    <div>
      
       <NavigationThree />

       <Parallax
       blur={{ min: -10, max:10}}
       bgImage={require('./img2.jpg')}
       strength={500}
       bgClassName="About_paral1">
        <div className="About-box">
             <h1 className="Primary-head About_primary_head wow fadeIn">About Us</h1> 
             <div className="Paragraph wow fadeIn" data-wow-delay='0.5s'>
             <p>The Bio-Inspired Engineering Team is primarily focused on providing solutions and technologies that are geared towards solving the multiple problems that plague society. All the innovations and developments are inspired from the natural structures and designs. Allowing these products to be efficient, compliant, cheap, and an Indian Innovation. All projects are created with the inspiration of nature's design. The team comprises of skilled and motivated individuals who constantly strive to create products which can change human lives. Created by students, for the masses.</p>
             </div>
        </div>
        </Parallax>
    
        <div className="About_paral2">
        <div className="Section-1">
             <h1 className="Primary-head wow fadeIn">The Innovators</h1><br/><br/>
              <div className="a-display wow fadeInLeft" data-wow-delay='0.4s'> {a_display}
             </div>
              <div className="b-display wow fadeInRight" data-wow-delay='0.4s'>  
             {b_display}
             </div>

        </div>
        </div>

        <div className="paral-3">
    
         <div className="Section-2">
     <h1 className="Primary-head wow fadeIn" data-wow-delay='0.3s'>Benefactors</h1>
     <div className="section-detail wow fadeIn" data-wow-delay='0.7s'>
     <div className="info-box">
     <img src={DSIR} alt="Logo" className="org_logo"/>
     </div>

     <div className="info-box">
     <img src={DST} alt="Logo" className="org_logo"/>
     </div>

     <div className="info-box">
     <img src={ICMR} alt="Logo" className="org_logo"/>
     </div>

     <div className="info-box">
     <img src={VIT} alt="Logo" className="org_logo"/>
     </div>

     </div>

     </div>
     </div>



     <Pagefooter/>


     
     </div>
  


     </div>
  )
}
}
  
  export default About;


