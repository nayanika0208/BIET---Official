import React, { Component } from 'react';
import Parallax from './Components/Home/ParallaxEffect';

import { StickyContainer, Sticky } from 'react-sticky';
import Collapsebar from './Components/Home/Collapsebar';
import Logobar from './Components/Home/Logobar';
import About from './Components/About/About'
import ProjectList from './Components/OngoingProjects/OngoingProject';
import Joinform from './Components/joinNewProjects/joinform.js'
import {BrowserRouter, Route} from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';

import './topography.css';


class App extends Component {

	
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
