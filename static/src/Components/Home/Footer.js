import React from 'react';
import mainLogo from "./BIETLogo.png";
import{Glyphicon} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';
import Map from './Maps';



const Footer=()=>
{
  return(


    <div className="Footer-box">
    <Map/>

      <div className="Contact-box">
        <h3>Contact-Us</h3>
        <div>
        
            Free Call: 1-800-000-0000<br/>
            Tel: 123-456-7890 <br/>
            500 Terry Francois St<br/>
            San Francisco,CA 94158<br/>
            info@mysite.com
        </div>
      </div>

      <div className="logo-container">
        <img src={mainLogo} alt="Logo" className="Logo" />
      </div>


      <div className="Social-media-box">
        <h3>Be a SociaLight and  Follow Us:</h3>
        <SocialIcon className="icon" url="https://www.facebook.com/" />
        <SocialIcon className="icon" url="https://www.instagram.com/" />
        <SocialIcon className="icon" url="https://www.twitter.com/" />
        <SocialIcon className="icon" url="https://www.linkedin.com/" />
        <SocialIcon className="icon" url="https://www.github.com/" />
      </div>

    </div>
  )
}


export default Footer;