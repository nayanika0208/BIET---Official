import React from 'react';
import './b-member.css';
import temp_image from './img1.jpg';

const Bcomp=({name,designation,image})=>
{

  return(
    <div class="b-member shadow-5">
    <img src={temp_image} alt="Member-photograph" className="member-photo"/>
    <div className="part-1">
    <span className="content-1">{name} </span>
    </div>
    <div className="part-2">
    <span className="content-2">{designation} </span>
   </div>
   </div>
  )}

export default Bcomp;