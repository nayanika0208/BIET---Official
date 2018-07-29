import React from 'react';
import mainLogo from "./BIETLogo.png";
import{Glyphicon} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';
import Map from './Maps';



const Footer=()=>
{
  return(

    <div className="Contact_About-box">
    <div className="Contact_left-part"> 

    <h2 className="Contact_left_Secondary-head">Contact Us</h2>


    <div className="Contact_content-box">
        
    Vellore Institute of Technology<br/>
    Near Katpadi Road,Vellore,<br/>
     632014 , Tamil Nadu<br/>
      Mob:+91-9790547321<br/>
      biet.ilabs@gmail.com
    </div>


    <div className="Social-media-box">
    <h3>Be a SociaLite and  Follow Us:</h3>
    <SocialIcon className="icon" url="https://www.facebook.com/" />
    <SocialIcon className="icon" url="https://www.instagram.com/" />
    <SocialIcon className="icon" url="https://www.twitter.com/" />
    <SocialIcon className="icon" url="https://www.linkedin.com/" />
  </div>


  </div>
        <div className="Contact_right-part">
        <h2 className="Contact_right_Secondary-head">Find Us</h2>

        <div className="map-box">

        <Map/>
        </div>

        </div>
        </div>
  


  )
}


export default Footer;