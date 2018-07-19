import React,{Component} from 'react';
import Acomp from './a-member/member_comp';
import Bcomp from './b-member/member_comp';
import Ccomp from './c-member/member_comp';
import './About.css';

//import pictures of logo

import DSIR from './DSIR.png';
import DST from './DST.png';
import ICMR from './ICMR.jpg';
import VIT from './VIT.png';




const a_members=[{name:"Member Name",designation:"Member Post",image:"../img1.jpg"},{name:"Member Name",designation:"Member Post",image:"../img1.jpg"}];

const b_members=[{name:"Member Name",designation:"Member Post",image:"../img1.jpg"},{name:"Member Name",designation:"Member Post",image:"../img1.jpg"}
,{name:"Member Name",designation:"Member Post",image:"../img1.jpg"},{name:"Member Name",designation:"Member Post",image:"../img1.jpg"}];

const c_members=[{name:"Member Name",image:"../img1.jpg"},{name:"Member Name",image:"../img1.jpg"}
,{name:"Member Name",image:"../img1.jpg"},{name:"Member Name",image:"../img1.jpg"},{name:"Member Name",image:"../img1.jpg"},{name:"Member Name",image:"../img1.jpg"}
,{name:"Member Name",image:"../img1.jpg"},{name:"Member Name",image:"../img1.jpg"}];


const a_display = a_members.map((element,index)=>
{
  return(
    <Acomp name={element.name} designation={element.designation} image={element.image} />
  )
})


const b_display = b_members.map((element,index)=>
{
  return(
    <Bcomp name={element.name} designation={element.designation} image={element.image} />
  )
})

const c_display = c_members.map((element,index)=>
{
  return(
    <Ccomp name={element.name}  image={element.image} />
  )
})





class About extends Component
{

  render()
  {

  return(
    <div>
    <div class="about-1">
     <h1 className="primary-head">ABOUT US</h1> 
     <p>I'm a paragraph. Click here to add your own text and edit me.
     It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
     </p>
     </div>

     <div className="Section-1">
     <h1 className="primary-head">MEET OUR TEAM </h1>
      <div className="a-display"> 
     {a_display}
     </div>
   

     
     <div className="b-display">  
     {b_display}
     </div>
    
     <div className="c-display">  
     {c_display}
     </div>

     

     </div>

     <div className="Section-2">
     <h1 className="primary-head">OUR SUPPORTERS</h1>
     <div className="section-detail">
     <div className="info-box">
     <img src={DSIR} alt="Logo" className="org_logo"/>
     <div className="org_name"><h3>SUPPORTER NAME </h3></div>>
     </div>

     <div className="info-box">
     <img src={DST} alt="Logo" className="org_logo"/>
     <div className="org_name"><h3>SUPPORTER NAME </h3></div>>
     </div>

     <div className="info-box">
     <img src={ICMR} alt="Logo" className="org_logo"/>
     <div className="org_name"><h3>SUPPORTER NAME </h3></div>>
     </div>

     <div className="info-box">
     <img src={VIT} alt="Logo" className="org_logo"/>
     <div className="org_name"><h3>SUPPORTER NAME </h3></div>>
     </div>

     </div>

     </div>








     </div>
  )
}
}
  
  export default About;


