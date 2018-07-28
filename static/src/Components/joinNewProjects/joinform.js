import React,{Component} from 'react';
import{form,Form,FormGroup,FormControl,InputGroup,DropdownButton,Button,Glyphicon,MenuItem,ControlLabel} from 'react-bootstrap';
import{HelpBlock} from 'react-bootstrap';
import './joinform.css';
import Pagefooter from '../PageFooter/PageFooter.js';
import Navigation from '../Navigation/Navigation.js';
import NavigationTwo from '../Navigation/Navigation2.js'
import { StickyContainer, Sticky } from 'react-sticky';
import Collapsebar from '../Home/Collapsebar';
import Logobar from '../Home/Logobar';


 const FieldGroup=({ id, label, help, ...props })=>{
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <span className="required">*</span>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


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
          <div className="load ">
                <p className="Primary-head">Loading</p>
                <div className="ring">
                </div>
       </div> 
        );

    }else{
        return(
        <div>
        <div>
       
         <Navigation/>
        <NavigationTwo/>
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