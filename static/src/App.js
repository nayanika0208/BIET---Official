import React, { Component } from 'react';
import Parallax from './Components/Home/ParallaxEffect';
import Navigation from './Components/Home/Navigation';
import { StickyContainer, Sticky } from 'react-sticky';
import Collapsebar from './Components/Home/Collapsebar';
import Logobar from './Components/Home/Logobar';

import './App.css';


class App extends Component {

	
  render() {
  
    return (
      
        <div>
        <Logobar/>
        <StickyContainer >
        
        <Sticky>{({ style,isSticky })=>(<Collapsebar style={style}  isSticky={isSticky}/>)}</Sticky>
        <Parallax />
        
        </StickyContainer>
        </div>
      
      
    );
  }
}

export default App;
