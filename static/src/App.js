import React, { Component } from 'react';
import Parallax from './Components/ParallaxEffect';
import Navigation from './Components/Navigation';
import { StickyContainer, Sticky } from 'react-sticky';
import Collapsebar from './Components/Collapsebar';
import Logobar from './Components/Logobar';

import './App.css';

class App extends Component {
  render() {
    return (
      
        <div>
        <Logobar/>
        <StickyContainer >
        
        <Sticky>{({ style })=>(<Collapsebar style={style}/>)}</Sticky>
        <Parallax />
        </StickyContainer>
        </div>
      
      
    );
  }
}

export default App;
