import React, { Component } from 'react';
import Parallax from './Components/ParallaxEffect';
import Navigation from './Components/Navigation';
import { StickyContainer, Sticky } from 'react-sticky';
import Collapsebar from './Components/Collapsebar';
import Logobar from './Components/Logobar';

import './App.css';

const tst=(value)=>{
  		console.log(value)
  	}
class App extends Component {

	
  render() {
  
    return (
      
        <div>
        <Logobar/>
        <StickyContainer >
        
        <Sticky>{({ style,isSticky })=>(<Collapsebar style={style} tst={tst(isSticky)} isSticky={isSticky}/>)}</Sticky>
        <Parallax />
        </StickyContainer>
        </div>
      
      
    );
  }
}

export default App;
