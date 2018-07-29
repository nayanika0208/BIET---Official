import React, { Component } from 'react';
import mainLogo from "../BietLogo1.svg"
import './Pagefooter.css';


const Pagefooter=()=> {

 
    return (


      <div className="Certify-box">
        <div className="logo-container">
        <img src={mainLogo} alt="Logo" className="Foot_Logo"  />
      </div>
        <div className="Foot_status-1">
       Created by-<br/><div ><a className="Credits" href="https://github.com/Sayan97">Sayan Bandyopadhyay</a></div>
      </div>
      <div className="Foot_status-2">
      Developed by-<br/><div ><a className="Credits" href="https://github.com/Utkarshmalik">Utkarsh Malik</a><br/><a className="Credits" href="https://github.com/nayanika0208">Nayanika Singh</a></div>
     </div>
      </div>
      
    );
  
}

export default Pagefooter;
