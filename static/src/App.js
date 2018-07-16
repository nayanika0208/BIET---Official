import React, { Component } from 'react';
import Parallax from './Components/ParallaxEffect';
import Navigation from './Components/Navigation';
import Check from './Components/Check';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
     
         <Navigation />
         <Check/>
      </div>
      
    );
  }
}

export default App;
