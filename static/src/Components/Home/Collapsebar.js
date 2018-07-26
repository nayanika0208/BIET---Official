import React, { Component } from 'react';
import{Navbar,NavDropdown,NavItem,Nav,MenuItem} from 'react-bootstrap';
import "./Collapsebar.css";
<<<<<<< HEAD
import mainLogo from "../BietLogo1.svg";
=======
import mainLogo from './BietLogo1.svg';
>>>>>>> df56126fe0e492a3feada5c7f23f61b9062af348
import {NavLink} from 'react-router-dom';
//import Header from "@material-kit-react/src/components/Header/Header.jsx";
const Onscroll=(e)=>{
   
}


class Collapsebar extends Component{



   
  render(){
    const { style ,wasSticky ,isSticky} = this.props;
   
        return (
        
      <Navbar  fixedTop className="navbar navbar-inverse " id="navBar"style={style} >
      <Navbar.Header>

      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className="Nav-content-one" id="navContent">
          <NavItem eventKey={1} href="#" >
          <NavLink className="Nav-link" to='/' >Home </NavLink>
           </NavItem>
          <NavItem eventKey={1} href="#">
          <NavLink className="Nav-link" to='/About' >About </NavLink>
          </NavItem>
          </Nav>
          
          <Navbar.Brand >
          <a href="#home" style={{position:"absolute",top:"0px",left:"10%",width:"40rem"}} >
          <img src={mainLogo} alt="Logo" width="100px" height="100px"  className="logo-size half-circle" id="logo"/>
          </a>
          </Navbar.Brand>
         <Nav  className="Nav-content-two" >
      
          <NavItem eventKey={2} href="#">
           <NavLink className="Nav-link" to='/OngoingProject'>Projets </NavLink>
          </NavItem>
            <NavItem eventKey={1} href="#">
            <NavLink className="Nav-link" to='/JoinNew' >Join </NavLink>
          </NavItem>
            <NavItem eventKey={1} href="#">
            <NavLink className="Nav-link" to='/Blogs'> Blogs </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    
);

    
    }
}

export default Collapsebar;