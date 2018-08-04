import React,{Component} from 'react';
import './joinform.css';

import Navigation from '../Navigation/Navigation.js';//main navigation bar
import NavigationThree from '../Navigation/Navigation3.js';//navigation bar on scroll
import Pagefooter from '../PageFooter/PageFooter.js';//footer on each page


class Joinform extends Component
{
       constructor(props) {
        super(props);
        this.state = {
          data: undefined,
          loading:true,
        }
      }

      componentDidMount(){
        const source ="https://docs.google.com/forms/d/e/1FAIpQLSegQ3wPCz3bs3YfuGwMKxaQX0uUKMV2LsM154wOi94g9reYBQ/viewform?embedded=true";
          this.setState({ data: source});
          const form =document.querySelector('#form-1');
          if(this.state.loading !==true)
         { form.innerHTML=`<iframe src=${this.state.data} width="700" height="1500" frameborder="0" marginheight="0" marginwidth="0"></iframe>`
         }
          setTimeout(() => this.setState({ loading: false }), 1500);
        }
        
  render(){
    const { loading }=this.state;
    if(loading){
      return(
        <div >
        <NavigationThree/>
      
          <div className="load">
          <p className="load-text">Loading</p>
          <div className="load5">
               <div className="ring-2">
                
                <div className="ball-holder">
                <div className="ball">
                </div>
                </div>
                </div>
                </div>
        </div>
       </div>
        );

    }else{
        return(
        <div>
        <div>
        <NavigationThree/>
        <div className="form-box">
        <div className="form-container" id="form-1">
        <iframe src={this.state.data} width="700" height="1500" frameborder="0" marginheight="0" marginwidth="0"></iframe>
        </div>
        </div>
        </div>
       <Pagefooter/>
       </div>
  );
      }
}
}

export default Joinform;