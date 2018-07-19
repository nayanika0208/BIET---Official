import React, { Component } from 'react';
import Parallax from './Components/Home/ParallaxEffect';
import Navigation from './Components/Home/Navigation';
import { StickyContainer, Sticky } from 'react-sticky';
import Collapsebar from './Components/Home/Collapsebar';
import Logobar from './Components/Home/Logobar';
import About from './Components/About/About'
import ProjectList from './Components/OngoingProjects/OngoingProject';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';


class App extends Component {

	
  render() {
  
    return (


      <BrowserRouter>

      <div>
      
        <div>
        <Logobar/>
        <StickyContainer >
        <Sticky>{({ style,isSticky })=>(<Collapsebar style={style}  isSticky={isSticky}/>)}</Sticky>
        </StickyContainer>
        </div>

        <switch>

        <Route path="/" component={Parallax} exact/>
        <Route path="/About" component={About} />
        <Route path="/OngoingProject" component={ProjectList} />

        </switch>

        </div>

        </BrowserRouter>
      
      
    );
  }
}

export default App;
