import React,{Component} from 'react';
import{form,Form,FormGroup,FormControl,InputGroup,DropdownButton,Button,Glyphicon,MenuItem,ControlLabel} from 'react-bootstrap';
import{HelpBlock} from 'react-bootstrap';
import './joinform.css';

 const FieldGroup=({ id, label, help, ...props })=>{
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const linkFun=()=>{
  const selectedLink=document.querySelector("#selection");
  const addon=document.querySelector("#addon-value")
  if(selectedLink.selectedIndex===0){
   
    addon.innerHTML="https://www.facebook.com/"
  }
  else if(selectedLink.selectedIndex===2){
   
    addon.innerHTML="https://github.com/"
  }
  else if(selectedLink.selectedIndex===1){
   
    addon.innerHTML="https://www.linkedin.com/"
  }
}

class Joinform extends Component
{


  render(){
  return(
    <div className="container-box shadow-5" >
    <Form horizontal className="form-box">
    
       <FormGroup controlId="formControlsSelect">
      <ControlLabel>Project</ControlLabel>
      <FormControl componentClass="select"  placeholder="select">
        <option value="project1">project1</option>
        <option value="project2">project2</option>
        <option value="project3">project3</option>
        <option value="project4">project4</option>
        <option value="project5">project5</option>
      </FormControl>
    </FormGroup>
   
   <div >
    <FieldGroup 
      id="formControlsText"
      type="text"
      label="Name"
      placeholder="Enter text"
      className="name-box"
      
    />
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Surname"
      placeholder="Enter text"
      className="Surname-box"
    />
    </div>
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
      
    />
    <FieldGroup
      id="formControlsText"
      type="text"
      label="project no"
      placeholder="input pr no"
      
    />
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Branch"
      placeholder="Enter branch"
    />
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="Resume"
      help="Upload ur resume"
      required="true"
       accept="application/pdf, application/vnd.ms-excel"
    />
    

     <FormGroup controlId="formControlsSelect">
      <ControlLabel>Links</ControlLabel>
      <FormControl componentClass="select" placeholder="select" id="selection" onChange={linkFun}>
        <option value="select">Facebook</option>
        <option value="other">Linkedin</option>
        <option value="other">Github</option>
      </FormControl>
      
      <FormGroup>
      <InputGroup>
      <InputGroup.Addon id="addon-value"></InputGroup.Addon>
      <FormControl type="text" />
        </InputGroup>
      </FormGroup>
      </FormGroup>

    <Button type="submit">Submit</Button>
</Form>
</div>
  );
}
}

export default Joinform;