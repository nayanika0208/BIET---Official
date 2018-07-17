import React, { Component } from 'react';
import Parallax from './Components/ParallaxEffect';
import Navigation from './Components/Navigation';
import Check from './Components/Check';
import Collapsebar from './Components/Collapsebar';
import Logobar from './Components/Logobar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Logobar/>
      <Collapsebar />
      <Parallax />
        
      </div>
      
    );
  }
}

export default App;
