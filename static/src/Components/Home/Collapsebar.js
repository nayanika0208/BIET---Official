import React, { Component } from 'react';
import{Navbar,NavDropdown,NavItem,Nav,MenuItem} from 'react-bootstrap';
import "./Collapsebar.css";
import mainLogo from "./BIETLogo.png";
import {NavLink} from 'react-router-dom';

class Collapsebar extends Component{


   
  render(){
    const { style ,tst ,isSticky} = this.props;
     if(isSticky){
        return (
        
      <Navbar  collapseOnSelect inverse fixedTop className="Navbar" style={style} >
      <Navbar.Header>
      <Navbar.Brand >
      <a href="#home" >
      <img src={mainLogo} alt="Logo" height="100%" className="logo-size" />
      </a>
    </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className="Nav-content-two" >
          <NavItem eventKey={1} href="#" >
          <NavLink to='/'>Home </NavLink>
           </NavItem>
          <NavItem eventKey={1} href="#">
          <NavLink to='/About'> About </NavLink>
          </NavItem>
          <NavItem eventKey={2} href="#">
           <NavLink to='/OngoingProject'> Ongoing Projets </NavLink>
          </NavItem>
            <NavItem eventKey={1} href="#">
            <NavLink to='/JoinNew'> join New Projects </NavLink>
          </NavItem>
            <NavItem eventKey={1} href="#">
            <NavLink to='/Blogs'>  Blogs </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>);

    }else{
      return(
      <Navbar inverse collapseOnSelect className="Navbar" style={style} >
      <Navbar.Header>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className="Nav-content" >
          <NavItem eventKey={1} href="#" onClick={tst}>
          <NavLink to='/'>Home </NavLink>
          </NavItem>
          <NavItem eventKey={1} href="#">
          <NavLink to='/About'> About </NavLink>

          </NavItem>
          <NavItem eventKey={2} href="#">
          <NavLink to='/OngoingProject'> Ongoing Projets </NavLink>
          </NavItem>
            <NavItem eventKey={1} href="#">
            <NavLink to='/JoinNew'> join New Projects </NavLink>
          </NavItem>
            <NavItem eventKey={1} href="#">
            <NavLink to='/Blogs'>  Blogs </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    );}
      
    }
}

export default Collapsebar;