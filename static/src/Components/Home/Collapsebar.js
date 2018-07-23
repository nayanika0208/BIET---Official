import React, { Component } from 'react';
import{Navbar,NavDropdown,NavItem,Nav,MenuItem} from 'react-bootstrap';
import "./Collapsebar.css";
import mainLogo from "../BIETLogo1.png";
import {NavLink} from 'react-router-dom';
//import Header from "@material-kit-react/src/components/Header/Header.jsx";
const Onscroll=(e)=>{
   
}


class Collapsebar extends Component{



   
  render(){
    const { style ,wasSticky ,isSticky} = this.props;
   
        return (
        
      <Navbar  fixedTop className="navbar  navbar-inverse " id="navBar"style={style} >
      <Navbar.Header>
      <Navbar.Brand >
      <a href="#home" style={{position:"absolute",top:"0px",width:"150px"}}>
      <img src={mainLogo} alt="Logo" height="100%" className="logo-size" />
      </a>
    </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className="Nav-content-two" id="navContent">
          <NavItem eventKey={1} href="#" >
          <NavLink className="Nav-link" to='/'>Home </NavLink>
           </NavItem>
          <NavItem eventKey={1} href="#">
          <NavLink className="Nav-link" to='/About'> About </NavLink>
          </NavItem>
          <NavItem eventKey={2} href="#">
           <NavLink className="Nav-link" to='/OngoingProject'> Ongoing Projets </NavLink>
          </NavItem>
            <NavItem eventKey={1} href="#">
            <NavLink className="Nav-link" to='/JoinNew'> Join New Projects </NavLink>
          </NavItem>
            <NavItem eventKey={1} href="#">
            <NavLink className="Nav-link" to='/Blogs'>  Blogs </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>);

    
    }
}

export default Collapsebar;