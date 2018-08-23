import React,{Component} from 'react';
import './OngoingProjectComp.css';
import{Glyphicon} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';




//import { url } from 'inspector';
class OngoingProjectComp extends Component{
    constructor(props){
      super(props)
      this.moveRight = this.moveRight.bind(this);
      this.moveLeft = this.moveLeft.bind(this);
    }
    //logic for displaying the details on clicking the details button
    moveRight=(e)=>{
        e.preventDefault();
        let f=document.querySelectorAll(".first-display");
        let s=document.querySelectorAll(".second-display");
        //set index for each specific component
        let index=this.props.Index;
        switch(index){
            case 1:f[0].style.opacity="0";
                  s[0].style.transform="translateX(0%)";
            break;
            case 2:f[1].style.opacity="0";
                  s[1].style.transform="translateX(0%)";
            break;
            case 3:f[2].style.opacity="0";
                  s[2].style.transform="translateX(0%)";
            break;
            }
      }
      //logic for displaying the main side on clcking the left button
      moveLeft=(e)=>{
        let f=document.querySelectorAll(".first-display");
        let s=document.querySelectorAll(".second-display");
        let index=this.props.Index;
         switch(index){
           case 1:f[0].style.opacity="1";
                  s[0].style.transform="translateX(100%)";
           break;
           case 2:f[1].style.opacity="1";
                  s[1].style.transform="translateX(100%)";
           break;
           case 3:f[2].style.opacity="1";
                  s[2].style.transform="translateX(100%)";
           break;
         }
      }

  render(){

  return(
    <div className="project_component">
        <div className="project_image shadow-5">
            <div className="main">
                  <img src={require(`./Images/img${this.props.Index}.jpg`)} alt="project-image" height="100%" width="100%" className="front-face"/>
                <div className="first-display">
                  <div className="info wow fadeInLeft" data-wow-delay='0.4s'>
                    <div className="details">
                       <div className="project_details">
                         <div className="Primary-head-project">{this.props.Title}</div>
                            <div className="ongoing_para">
                                {this.props.Summary}
                            </div>
                            <a href="#"> <button class="Details_button-1"  onClick={this.moveRight} >Project Details <span>  <Glyphicon glyph="menu-right" /> </span>  </button> </a>
                          </div>
                      </div>
                    </div>
                    <div className="side_logo wow fadeInRight" data-wow-delay='0.4s'>
                        <img src={require(`./Logo/Logo${this.props.Index}.png`)} alt="project-image"  className="img2"/>
                    </div>
                  </div>
                  <div className="second-display">
                    <div className="info2">
                      <div className="project_details">
                        <div className="Primary-head-project">{this.props.Title}</div>
                          <div className="ongoing_para-2">
                                {this.props.Description}
                          </div>
                          <a href="#"> <button class="Details_button-2"><NavLink  to='/JoinNew'>Join</NavLink><span>  <Glyphicon glyph="menu-right" /> </span>  </button> </a>
                       </div>
                    </div>
                      <a className="arrow-button-left" onClick={this.moveLeft}><Glyphicon glyph="menu-left" /> </a>
                   </div>
              </div>
          </div>
        </div>
  )
}
}
export default OngoingProjectComp;
