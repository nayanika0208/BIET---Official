import React from 'react';
import './a-member.css';
import temp_image from './img1.jpg';

const Acomp=({name,designation,image})=>
{

  return(
    <div class="a-member">
    <img src={temp_image} alt="Member-photograph" className="member-photo"/>
    <div className="part-1">
    <span className="content-1">{name} </span>
    </div>
    <div className="part-2">
    <span className="content-2">{designation} </span>
   </div>
   </div>
  )}

export default Acomp;