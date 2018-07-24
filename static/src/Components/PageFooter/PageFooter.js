import React, { Component } from 'react';
import mainLogo from "../BIETLogo1.png"
import './Pagefooter.css';


const Pagefooter=()=> {

 
    return (


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
      
    );
  
}

export default Pagefooter;
