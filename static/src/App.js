import React, { Component } from 'react';
import Parallax from './Components/Home/ParallaxEffect';
import { StickyContainer, Sticky } from 'react-sticky';
import Collapsebar from './Components/Home/Collapsebar';
import About from './Components/About/About'
import ProjectList from './Components/OngoingProjects/OngoingProject';
import Joinform from './Components/joinNewProjects/joinform.js'
import {BrowserRouter, Route} from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';

import './topography.css';



class App extends Component {

 constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
   const navbar =document.querySelector("#navBar");
   const navContentLeft=document.querySelector("#navContent1");
   const navContentRight=document.querySelector('#navContent2');
   const logo=document.querySelector("#logo");
  
   if(window.scrollY>105){
   navbar.style.backgroundColor="black";
   navbar.style.borderBottom="0px";
    logo.classList.remove("logo-size");
    logo.classList.add("onScroll-logo");
    logo.classList.remove("half-circle");
    navContentLeft.classList.remove("Nav-content-one");
    navContentLeft.classList.add("onscroll-navContent1");
    navbar.classList.add("onscrollNavbar");
    navContentRight.classList.remove("Nav-content-two");
    navContentRight.classList.add("onscroll-navContent2");



}
  
else{
  navbar.style.backgroundColor="black";
  navbar.style.borderBottom="0px";
  navContentLeft.style.top="20%";
  logo.classList.add("logo-size");
  logo.classList.remove("onScroll-logo");
 logo.classList.add("half-circle");
 navContentLeft.classList.add("Nav-content-one");
 navbar.classList.remove("onscrollNavbar");
navContentLeft.classList.remove("onscroll-navContent1");
 navContentRight.classList.add("Nav-content-two");
navContentRight.classList.remove("onscroll-navContent2");
}
}
  render() {
  
    return (


      <BrowserRouter>
        <switch>

        <Route path="/" component={Parallax} exact/>
        <Route path="/About" component={About} />
        <Route path="/OngoingProject" component={ProjectList} />
        <Route path="/JoinNew" component={Joinform} />
        <Route path="/Blogs" component={Blogs} />

        </switch>
        </BrowserRouter>
      
      
    );
  }
}

export default App;
