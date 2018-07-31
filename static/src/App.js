import React, { Component } from 'react';

//each page of the website
import Home from './Components/Home/ParallaxEffect';//homePage
import About from './Components/About/About';//AboutPage
import ProjectList from './Components/OngoingProjects/OngoingProject';//Ongoing projects Section
import Joinform from './Components/joinNewProjects/joinform.js';//Form for joning
import Blogs from './Components/Blogs/Blogs';//Blog section

import {BrowserRouter, Route} from 'react-router-dom';//router for navigation between different pages

import 'tachyons';

class App extends Component {

 

  render() {
  
    return (


      <BrowserRouter>
        <switch>

        <Route path="/" component={Home} exact/>
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
