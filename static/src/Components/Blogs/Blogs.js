import React ,{Component} from 'react';
import {Carousel,FormControl,FormGroup,Button} from 'react-bootstrap';
import Timelinedisp from './Timeline_disp';

import img1 from './img1.jpeg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

import NavigationTwo from '../Navigation/Navigation2.js';//navigation bar 
import Pagefooter from '../PageFooter/PageFooter.js';//footer on each page

import './Blogs.css';

const Blogs = ()=>
{

  return(

    <div>
      <div>
     
        <NavigationTwo/>
        

          <div className="Blog_paral1">
            
        
        <div className="Blog_Section-1">
        <h1 className="primary-head">Our Timeline</h1> 

        <Timelinedisp/>
        </div>
        
    
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
    </div>
  );

    <div className="Blog_Section-3">
    <h1 className="primary-head">SHARE YOUR IDEA</h1>
    <div className="Blog_form-box">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdV1dm6WAqBj7xpPhs-j21SJWNc36VX3A4zjl0O_PkbOMrTzQ/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </div>
</div>
<Pagefooter/>
</div>
</div>
)


}


export default Blogs;