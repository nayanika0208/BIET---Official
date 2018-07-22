import React, { Component } from 'react';
import './ParallaxEffect.css';
import ProjectDisplay from './Project_Display';
import Map from './Maps';
import ProjectList from '../OngoingProjects/OngoingProject';
import Footer from './Footer';
import Collapsebar from './Collapsebar';
import Logobar from './Logobar';
import { StickyContainer, Sticky } from 'react-sticky';
import mainLogo from "./Logo.png"
import icon from './bulb.png';


const Parallax=()=>{
 
    return (
    	<div>
        <div>
        <Logobar/>
        <StickyContainer >
        <Sticky>{({ style,isSticky,wasSticky })=>(<Collapsebar style={style}  isSticky={isSticky} wasSticky={wasSticky}/>)}</Sticky>
        
        <div className="paral1">

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

        <div className="paral3">
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
</StickyContainer>
        </div>
        
        

      </div>

    );
}

export default Parallax;