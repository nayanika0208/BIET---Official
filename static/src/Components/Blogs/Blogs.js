import React ,{Component} from 'react';
import {Carousel,FormControl,FormGroup,Button} from 'react-bootstrap';

import img1 from './img1.jpeg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';


import { StickyContainer, Sticky } from 'react-sticky';
import Collapsebar from '../Home/Collapsebar';
import Logobar from '../Home/Logobar';

import './Blogs.css';






const Blogs = ()=>
{

  return(

    <div>
    <div>
        <Logobar/>
        <StickyContainer >
        <Sticky>{({ style,isSticky,wasSticky })=>(<Collapsebar style={style}  isSticky={isSticky} wasSticky={wasSticky}/>)}</Sticky>
        
    <div className="paral1">
        <div className="Blog_Section-1">

    </div>
        </div>
    
        <div className="paral2">
        <div className="Blog_Section-2">
    <h1 className="primary-head">New Innovations </h1> 

    <Carousel className="Carousel">

  <Carousel.Item>
    <img width="1000px" height="500px" alt="900x500" src={img1} />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img width="1000px" height="500px" alt="900x500" src={img2} />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img width="1000px" height="500px" alt="900x500" src={img3} />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>


        </div>

        <div className="paral3">
    <div className="Blog_Section-3">

    <h1 className="primary-head">SHARE YOUR IDEA</h1>

    <div className="Blog_form-box">
    <h2>Enter your details </h2>
    <form>
    <FormGroup>

    <FormControl
    id="blog_formControlsText"
    type="text"
    label="Name"
    placeholder="Enter Name Here"
    />

  <FormControl
    id="blog_formControlsEmail"
    type="email"
    label="Email address"
    placeholder="Enter email"
  />

  <FormControl
  id="blog_formControlsProposal"
  type="text"
  label="Proposol"
  placeholder="Enter Proposol Here"
  />

  <FormControl 
  id="blog_formControlsAbstract"
   componentClass="textarea" 
   placeholder="Abstract" 
    />
  </FormGroup>
  <Button type="submit">Submit</Button>

</form>
</div>
</div>
</div>
</div>

  </StickyContainer>
  </div>
    </div>
  )
}


export default Blogs;