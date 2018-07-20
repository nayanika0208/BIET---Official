import React ,{Component} from 'react';
import {Carousel}from 'react-bootstrap';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

import './Blogs.css';

const Blogs = ()=>
{

  return(

    <div>

    
    <div className="Blog_Section-1">

    </div>

    
    <div className="Blog_Section-2">

    <Carousel className="Carousel">

  <Carousel.Item>
    <img width="50%" height="50%" alt="900x500" src={img1} />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img width="100%" height={400} alt="900x500" src={img2} />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img width="100%" height={400} alt="900x500" src={img3} />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>;



    </div>

    
    <div className="Blog_Section-3">

    </div>



    </div>
  )
}


export default Blogs;