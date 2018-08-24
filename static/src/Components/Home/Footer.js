import React from 'react';
import mainLogo from "./BietLogo1.svg";
import{Glyphicon} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';
//import MapContainer from './Maps';



const Footer=()=>
{
  return(

    <div className="Contact_About-box">
    <div className="Contact_left-part">

    <h2 className="Contact_left_Secondary-head  Secondary-head wow fadeInLeft">Contact us</h2>


    <div className="Contact_content-box wow fadeInLeft">

    Vellore Institute of Technology<br/>
    Near Katpadi Road,Vellore,<br/>
     632014 , Tamil Nadu<br/>
      Mob:+91-9790547321<br/>
      biet.ilabs@gmail.com
    </div>


    <div className="Social-media-box wow fadeInLeft">

    <h3>Be a SociaLite and  Follow Us:</h3>
    <SocialIcon className="icon grow" url="https://www.facebook.com/" />
    <SocialIcon className="icon grow" url="https://www.instagram.com/" />
    <SocialIcon className="icon grow" url="https://www.twitter.com/" />
    <SocialIcon className="icon grow" url="https://www.linkedin.com/" />

  </div>


  </div>
        <div className="Contact_right-part">
        <h2 className="Secondary-head Contact_right_Secondary-head wow fadeInRight">Find us</h2>

        <div className="map-box wow fadeInRight">

       {

       //<MapContainer/>
       }



      </div>

        </div>
        </div>



  )
}


export default Footer;
