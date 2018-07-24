import React,{Component} from 'react';
import{form,Form,FormGroup,FormControl,InputGroup,DropdownButton,Button,Glyphicon,MenuItem,ControlLabel} from 'react-bootstrap';
import{HelpBlock} from 'react-bootstrap';
import './joinform.css';


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


  render(){
  return(
    <div>
    <div>
    <Logobar/>
    <StickyContainer>
    <Sticky>{({ style,isSticky,wasSticky })=>(<Collapsebar style={style}  isSticky={isSticky} wasSticky={wasSticky}/>)}</Sticky>
    <div className="form-container">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegQ3wPCz3bs3YfuGwMKxaQX0uUKMV2LsM154wOi94g9reYBQ/viewform?embedded=true" width="700" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>   
    </div>
    </StickyContainer>
    </div>
    </div>
  );
}
}

export default Joinform;