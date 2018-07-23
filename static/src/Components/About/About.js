import React,{Component} from 'react';
import Acomp from './a-member/member_comp';
import Bcomp from './b-member/member_comp';
import Ccomp from './c-member/member_comp';
import './About.css';

import { StickyContainer, Sticky } from 'react-sticky';
import Collapsebar from '../Home/Collapsebar';
import Logobar from '../Home/Logobar';

//import pictures of logo

import DSIR from './DSIR.png';
import DST from './DST.png';
import ICMR from './ICMR.jpg';
import VIT from './VIT.png';




const a_members=[{name:"Sayan",designation:"Manager",image:"../img1.jpg"},{name:"Member Name",designation:"Member Post",image:"../img1.jpg"}];

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
    <div>
        <Logobar/>
        <StickyContainer >
        <Sticky>{({ style,isSticky,wasSticky })=>(<Collapsebar style={style}  isSticky={isSticky} wasSticky={wasSticky}/>)}</Sticky>
        
        <div className="About_paral1">
        <div className="About-box  shadow-5">
             <h1 className="Primary-head">ABOUT US</h1> 
             <div className="Paragraph">
             <p>I'm a paragraph. Click here to add your own text and edit me.
             It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
             </p>
             </div>
             </div>
        </div>
    
        <div className="About_paral2">
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
        </div>

        <div className="paral3">
    
         <div className="Section-2">
     <h1 className="primary-head">OUR SUPPORTERS</h1>
     <div className="section-detail">
     <div className="info-box">
     <img src={DSIR} alt="Logo" className="org_logo"/>
     </div>

     <div className="info-box">
     <img src={DST} alt="Logo" className="org_logo"/>
     </div>

     <div className="info-box">
     <img src={ICMR} alt="Logo" className="org_logo"/>
     </div>

     <div className="info-box">
     <img src={VIT} alt="Logo" className="org_logo"/>
     </div>

     </div>

     </div>
     </div>



     


     
     </StickyContainer>
     </div>
  


     </div>
  )
}
}
  
  export default About;


