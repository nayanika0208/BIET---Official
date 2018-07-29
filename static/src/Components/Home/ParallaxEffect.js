import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation.js';//main navigation bar
import NavigationTwo from '../Navigation/Navigation2.js';//navigation bar on scroll
import ProjectDisplay from './Project_Display';//project display section
import Pagefooter from '../PageFooter/PageFooter.js';//footer on each page
import Map from './Maps';
import Footer from './Footer';//footer on homepage section

import WOW from 'wow.js';//wow.js for animations

import {jarallax} from 'jarallax';

import './ParallaxEffect.css';

//logos used in page
import mainLogo from "./BietLogo1.svg";
import icon from './bulb.png';

import Particles from 'react-particles-js';
//particle js background
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


class Parallax extends Component{

  componentDidMount(){

      new WOW().init();

  }


  render(){
 
    return (
    	<div>
        <div>
        <Particles params={para} className="Particle"/>
        
      
        <Navigation/>
        <NavigationTwo/>
     

        
        <div className="paral1 " >

        <div className="head-box">
       
        <h1 className="Primary-head wow bounce" data-wow-duration="2s" data-wow-delay="0.1s"> WELCOME TO </h1>
        
         <span className="Main-head wow pulse grow" data-wow-delay="2.1s">INNOVATION LABS </span>
        </div>
        </div>
        <div className="About-box">
        <div className="left-part"> 

        <h2 className="Secondary-head">About Us</h2>
        <p className="paragraph">The Bio-Inspired Engineering Team is a comglomeration of the brightest minds in The Vellore Institute of Technology to create real solutions in this ever-changing landscape of technical innovations.</p>
             </div>
            <div className="right-part">
            <div className="image-box">
            <img src={icon} alt="icon" width="100%" height="100%" />
            </div>

            </div>
            </div>
      
        <div >
        <div className="paral2 jarallax" >
            <ProjectDisplay />
          </div>
        </div>

      <div className="head-back">
        <Footer/>
        <Pagefooter />
      </div>
      </div>
        
        

      </div>

    );
  }
}

export default Parallax;