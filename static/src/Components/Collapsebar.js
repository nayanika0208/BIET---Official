import React, { Component } from 'react';
import{Navbar,NavDropdown,NavItem,Nav,MenuItem} from 'react-bootstrap';
import "./Collapsebar.css";

class Collapsebar extends Component{


   
  render(){
    const { style ,tst ,isSticky} = this.props;
       if(isSticky){
          return (
          
        <Navbar inverse collapseOnSelect  className="Navbar" style={style} >
        <Navbar.Header>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="Nav-content" >
            <NavItem eventKey={1} href="#" onClick={tst}>
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
      </Navbar>);

      }else{
        return(
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>

      );}
        
      }
      }

export default Collapsebar;