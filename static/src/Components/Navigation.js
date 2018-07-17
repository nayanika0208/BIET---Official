import React, { Component } from 'react';
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';
import mainlogo from './Logo.png';
import './Navigation.css';



const Navigation=()=>{
 
    return (
    	
      <Navbar inverse collapseOnSelect fixedTop style={{backgroundColor: '#FFACAA'}} className="">
		  <Navbar.Header >
		    <Navbar.Brand>
		    <img src={mainlogo}  className=" grow" alt="fireSpot"/>
		      
		    </Navbar.Brand>

		    <Navbar.Toggle />
		  </Navbar.Header>
		  <Navbar.Collapse>
		    <Nav pullRight >
		      <Navbar.Brand >
		        Brand status
		      </Navbar.Brand>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
    );
  
}

export default Navigation;