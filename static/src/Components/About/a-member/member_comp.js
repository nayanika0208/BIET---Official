import React from 'react';
import './a-member.css';

const Acomp=({name,designation,index})=>
{

  return(
    <div class="a-member shadow-5">
    <img src={require(`./Images/img${index}.jpg`)} alt="Member-photograph" className="member-photo" height="100%" width="100%" />
    <div className="part-1">
    <span className="content-1">{name} </span>
    </div>
    <div className="part-2">
    <span className="content-2">{designation} </span>
   </div>
   </div>
  )}

export default Acomp;