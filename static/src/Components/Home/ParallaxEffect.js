import React, { Component } from 'react';
import './ParallaxEffect.css';
import ProjectDisplay from './Project_Display';
import Map from './Maps';
import ProjectList from '../OngoingProjects/OngoingProject';
import Footer from './Footer';





const Parallax=()=>{
 
    return (
    	<div>
        <div className="paral1">
        <div>
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

        
        

      </div>

    );
}

export default Parallax;