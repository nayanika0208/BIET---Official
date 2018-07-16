import React, { Component } from 'react';
import{Navbar,NavDropdown,NavItem,Nav,MenuItem} from 'react-bootstrap';




const Collapsebar=()=>{
 
    return (
    	
      <Navbar inverse collapseOnSelect fixedTop style={{marginTop:'50px'}}>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">we can write moto here</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
       Home
      </NavItem>
      <NavItem eventKey={1} href="#">
        About
      </NavItem>
      <NavItem eventKey={2} href="#">
        Ongoing Projets
      </NavItem>
        <NavItem eventKey={1} href="#">
        join New Projects
      </NavItem>
        <NavItem eventKey={1} href="#">
        Blogs
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
  
}

export default Collapsebar;