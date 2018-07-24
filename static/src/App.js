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
   const navContent=document.querySelector("#navContent")
   const logo=document.querySelector("#logo");
  
   if(window.scrollY>105){
   navbar.style.backgroundColor="#222629";
   navbar.style.borderBottom="0px";
    logo.classList.remove("logo-size");
    logo.classList.add("onScroll-logo");
    logo.classList.remove("half-circle");
    navContent.classList.remove("Nav-content-one")
    navContent.classList.add("onscroll-navContent1")




}
  
else{
  navbar.style.backgroundColor="black";
  navbar.style.borderBottom="0px";
  navContent.style.top="20%";
  logo.classList.add("logo-size");
  logo.classList.remove("onScroll-logo");
 logo.classList.add("half-circle");
 navContent.classList.add("Nav-content-one")
    navContent.classList.remove("onscroll-navContent1")
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
