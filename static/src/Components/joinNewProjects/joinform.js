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

        <div>
        <div>
        <h1 className="primary-head"> Join New Project </h1>
        <div className="Join_Section-1" >
        <Form horizontal className="form-box">

        <div className="contain">
        
               <FormGroup controlId="formControlsSelect" id="join_formControlsSelect">
              <ControlLabel>Project<span className="required">*</span></ControlLabel>
              <FormControl componentClass="select"  placeholder="select">
                <option value="project1">project1</option>
                <option value="project2">project2</option>
                <option value="project3">project3</option>
                <option value="project4">project4</option>
                <option value="project5">project5</option>
              </FormControl>
            </FormGroup>
            </div>
    
           
         
           <div className="contain">
            <FieldGroup
              id="join_formControlsText"
              type="text"
              label="Name"
              placeholder="Enter text"
              className="name-box"
              
              
            />
            </div>

            <div className="contain">

            <FieldGroup
              id="join_formControlsText"
              type="text"
              label="Surname"
              placeholder="Enter text"
              className="Surname-box"
            />
            </div>

            <div className="contain">

            
            <FieldGroup
              id="join_formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"
              
            />
            </div>

            <div className="contain">

            <FieldGroup
              id="join_formControlsText"
              type="text"
              label="Branch"
              placeholder="Enter branch"
            />

            </div>
            <div className="contain">
            <FieldGroup
              id="join_formControlsFile"
              type="file"
              label="Resume"
              help="Upload ur resume"
              required="true"
               accept="application/pdf, application/vnd.ms-excel"
            />
            </div>

            
           <div className="contain">
            
            <FormGroup>
            <ControlLabel>link ur profiles</ControlLabel>

            <div className="contain-1">
            <FormGroup>
            <div id="add_field">
            <InputGroup>
            <InputGroup.Addon id="addon-value">https://www.facebook.com/</InputGroup.Addon>
            <FormControl type="text" />
              </InputGroup>
              </div>
            </FormGroup>
            </div>
            
            <div className="contain-1">


            <FormGroup>
            <div id="add_field">

            <InputGroup>
            <InputGroup.Addon id="addon-value">https://github.com/</InputGroup.Addon>
            <FormControl type="text" />
              </InputGroup>
              </div>
            </FormGroup>

            </div>

            <div className="contain-1">

            <FormGroup>
            <div id="add_field">
            <InputGroup>
            <InputGroup.Addon id="addon-value">https://www.linkedin.com/</InputGroup.Addon>
            <FormControl type="text" />
              </InputGroup>
              </div>
            </FormGroup>
            </div>
  
            </FormGroup>
            </div>
            <div className="contain"> 
            <Button type="submit" className="join_button">Submit</Button>
            </div>
        </Form>
          </div>
          </div>
        </div>
   
      








   
    </StickyContainer>
    </div>

   
    </div>
  );
}
}

export default Joinform;