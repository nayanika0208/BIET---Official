import React, { Component } from 'react';
import{Navbar,NavDropdown,NavItem,Nav,MenuItem} from 'react-bootstrap';
import "./Collapsebar.css";

class Collapsebar extends Component{


   
  render(){
    const { style } = this.props;
 
    return (
      
  <Navbar inverse collapseOnSelect  className="Navbar" style={style}>
  <Navbar.Header>
  <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav className="Nav-content">
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
}

export default Collapsebar;