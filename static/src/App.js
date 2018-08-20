import React, { Component } from 'react';

//each page of the website
import Home from './Components/Home/ParallaxEffect';//homePage
import About from './Components/About/About';//AboutPage
import ProjectList from './Components/OngoingProjects/OngoingProject';//Ongoing projects Section
import Joinform from './Components/joinNewProjects/joinform.js';//Form for joning
//import Blogs from './Components/Blogs/Blogs';//Blog section

import {BrowserRouter, Route,Switch} from 'react-router-dom';//router for navigation between different pages

import 'tachyons';


class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

// export default withRouter(ScrollToTop);

class App extends Component {



  render() {

    return (


      <BrowserRouter>

        <Switch>
          <ScrollToTop>
        <Route path="/" component={Home} exact/>
        <Route path="/About" component={About} />
        <Route path="/OngoingProject" component={ProjectList} />
        <Route path="/JoinNew" component={Joinform} />
        {//<Route path="/Blogs" component={Blogs} />
    }
  </ScrollToTop>

        </Switch>

        </BrowserRouter>


    );
  }
}

export default App;
