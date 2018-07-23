import React, { Component } from 'react';
import './ParallaxEffect.css';
import ProjectDisplay from './Project_Display';
import Map from './Maps';
import ProjectList from '../OngoingProjects/OngoingProject';
import Footer from './Footer';
import Collapsebar from './Collapsebar';
import Logobar from './Logobar';
import { StickyContainer, Sticky } from 'react-sticky';
import mainLogo from "../BIETLogo1.png"
import icon from './bulb.png';
import Particles from 'react-particles-js';

const para=
{
  particles: {

    number:
    {
      value:55,
      density:
      {
      enable:true,
      value_area:700
      }
    }
  }
}





const Parallax=()=>{
 
    return (
    	<div>
        <div>
        <Particles params={para} className="Particle"/>
        <Logobar/>
        
      <Collapsebar/>
        
        <div className="paral1" >

        <div className="head-box">
        <h1 className="Primary-head"> WELCOME TO </h1> <span className="Main-head">INNOVATION LABS </span>
        </div>
        </div>
        <div className="About-box">
        <div className="left-part"> 

        <h2 className="Secondary-head">About Us</h2>
        <p className="paragraph">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
             </div>
            <div className="right-part">
            <div className="image-box">
            <img src={icon} alt="icon" width="100%" height="100%" />
            </div>

            </div>
            </div>
      
    
        <div className="paral2">
        <ProjectDisplay/>

        </div>

        <div className="head-back">
        <Footer/>
        <div className="Certify-box">
        <div className="logo-container">
        <img src={mainLogo} alt="Logo" className="Foot_Logo"  />
      </div>
        <div className="Foot_status-1">
       <p>Copyright by -----</p>
      </div>
      <div className="Foot_status-2">
      <p>Developed by -----</p>
     </div>
      </div>
      </div>

        </div>
        
        

      </div>

    );
}

export default Parallax;