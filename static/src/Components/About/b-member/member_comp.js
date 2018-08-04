import React from 'react';
import './b-member.css';

const Bcomp=({name,designation,index})=>
{

  return(
    <div class="b-member">
    <img src={require(`./Images/img${index}.jpg`)} alt="Member-photograph" className="member-photo" height="100%" width="100%" />
    <div className="part-1">
    <span className="b_content-1">{name} </span>
    </div>
    <div className="part-2">
    <span className="b_content-2">{designation} </span>
   </div>
   </div>
  )}

export default Bcomp;