import React , { Component } from 'react';
import mainLogo from "./BIETLogo.png"

import './Logobar.css';

const Logobar = ()=>
{
  return(

    <div className="LogoBox">
    <img src={mainLogo} alt="Logo" height="100%" />
    </div>
  )
}

export default Logobar;