import React, { Component } from 'react';
import './ParallaxEffect.css';
import ProjectDisplay from './Project_Display';
import Map from './Maps';
import ProjectList from '../OngoingProjects/OngoingProject';
import Footer from './Footer';
import Collapsebar from './Collapsebar';
import Logobar from './Logobar';
import { StickyContainer, Sticky } from 'react-sticky';




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
    
        <div className="paral2">
        <ProjectDisplay/>

        </div>

        <div className="paral3">
        <Footer/>
        <div className="Certify-box">
       <p>Copyright by -----</p>
      <p>Developed by----</p>
      </div>
      </div>
</StickyContainer>
        </div>
        
        

      </div>

    );
}

export default Parallax;