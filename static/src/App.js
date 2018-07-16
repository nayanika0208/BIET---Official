import React, { Component } from 'react';
import Parallax from './Components/ParallaxEffect';
import Navigation from './Components/Navigation';
import Check from './Components/Check';
import Collapsebar from './Components/Collapsebar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <div>
         <Collapsebar />
         </div>
         <Parallax />
         <Navigation />
        
         
         

      </div>
      
    );
  }
}

export default App;
