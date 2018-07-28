import React ,{Component} from 'react';
import {Carousel,FormControl,FormGroup,Button} from 'react-bootstrap';
import Timeline from './timeline';

import img1 from './img1.jpeg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import Navigation from '../Navigation/Navigation.js';
import NavigationTwo from '../Navigation/Navigation2.js'

import Logobar from '../Home/Logobar';
import Pagefooter from '../PageFooter/PageFooter.js';
import './Blogs.css';






const Blogs = ()=>
{

  return(

    <div>
    <div>
     
        <NavigationTwo/>

        <Navigation/>

        
    <div className="Blog_paral1">
        <div className="Blog_Section-1">

        <Timeline  content={[{
          date:'01/01/1994',
          avatarURL: 'https://upload.wikimedia.org/wikipedia/en/8/89/Elder_Scrolls_Arena_Cover.jpg',
          photo: './the_elder_scrolls_1_arena_wallpaper_by_thejackmoriarty-d8mlpzc.png',
          title: 'The Elder Scrolls: 1',
          subtitle: 'Arena',
          content:"sdcsklcslkvlsmlvksmvlmsvlkmslvmslvm"
        },
        {
          date:'01/01/1994',
          avatarURL: 'https://upload.wikimedia.org/wikipedia/en/8/89/Elder_Scrolls_Arena_Cover.jpg',
          photo: './the_elder_scrolls_1_arena_wallpaper_by_thejackmoriarty-d8mlpzc.png',
          title: 'The Elder Scrolls: 1',
          subtitle: 'Arena',
          content:"sdcsklcslkvlsmlvksmvlmsvlkmslvmslvm"
        },
        {
          date:'01/01/1994',
          avatarURL: 'https://upload.wikimedia.org/wikipedia/en/8/89/Elder_Scrolls_Arena_Cover.jpg',
          photo: './the_elder_scrolls_1_arena_wallpaper_by_thejackmoriarty-d8mlpzc.png',
          title: 'The Elder Scrolls: 1',
          subtitle: 'Arena',
          content:"sdcsklcslkvlsmlvksmvlmsvlkmslvmslvm"
        },

        {
          date:'01/01/1994',
          avatarURL: 'https://upload.wikimedia.org/wikipedia/en/8/89/Elder_Scrolls_Arena_Cover.jpg',
          photo: './the_elder_scrolls_1_arena_wallpaper_by_thejackmoriarty-d8mlpzc.png',
          title: 'The Elder Scrolls: 1',
          subtitle: 'Arena',
          content:"sdcsklcslkvlsmlvksmvlmsvlkmslvmslvm"
        },
        {
          date:'01/01/1994',
          avatarURL: 'https://upload.wikimedia.org/wikipedia/en/8/89/Elder_Scrolls_Arena_Cover.jpg',
          photo: './the_elder_scrolls_1_arena_wallpaper_by_thejackmoriarty-d8mlpzc.png',
          title: 'The Elder Scrolls: 1',
          subtitle: 'Arena',
          content:"sdcsklcslkvlsmlvksmvlmsvlkmslvmslvm"
        },
        {
          date:'01/01/1994',
          avatarURL: 'https://upload.wikimedia.org/wikipedia/en/8/89/Elder_Scrolls_Arena_Cover.jpg',
          photo: './the_elder_scrolls_1_arena_wallpaper_by_thejackmoriarty-d8mlpzc.png',
          title: 'The Elder Scrolls: 1',
          subtitle: 'Arena',
          content:"sdcsklcslkvlsmlvksmvlmsvlkmslvmslvm"
        },
        {
          date:'01/01/1994',
          avatarURL: 'https://upload.wikimedia.org/wikipedia/en/8/89/Elder_Scrolls_Arena_Cover.jpg',
          photo: './the_elder_scrolls_1_arena_wallpaper_by_thejackmoriarty-d8mlpzc.png',
          title: 'The Elder Scrolls: 1',
          subtitle: 'Arena',
          content:"sdcsklcslkvlsmlvksmvlmsvlkmslvmslvm"
        },

        {
          date:'01/01/1994',
          avatarURL: 'https://upload.wikimedia.org/wikipedia/en/8/89/Elder_Scrolls_Arena_Cover.jpg',
          photo: './the_elder_scrolls_1_arena_wallpaper_by_thejackmoriarty-d8mlpzc.png',
          title: 'The Elder Scrolls: 1',
          subtitle: 'Arena',
          content:"sdcsklcslkvlsmlvksmvlmsvlkmslvmslvm"
        }
      ]} />

    </div>
        </div>
    
        <div className="Blog_paral2">
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
<Pagefooter/>

  </div>
    </div>
  )
}


export default Blogs;