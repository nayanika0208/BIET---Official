import React, { Component } from 'react';
import './ParallaxEffect.css';
import ProjectDisplay from './Project_Display';





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
      </div>

    );
}

export default Parallax;