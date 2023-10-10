
import "./Navbar.css";
 import React, { useState } from 'react'
import logo from '../../assets/fosspng.svg'

const Navbar = () => {
 

  return (
   
    <div className="bg-[#071330] justify-between items-center p-4" style={{
      display:"flex" ,
  }} >
  <img src="/logo.png"></img>
 <div className="flex gap-2">
<a className="text-white" href="#"> Home </a>  

<a className="text-white" href="#"> Event </a>  

<a className="text-white" href="#"> Team</a>  

 <a className="text-white" href="#"> About </a>  

<a className="text-white" href="#"> Gallery </a>  

</div>
<button className="text-white bg-yellow-600 p-2 rounded-full" >Contact Us!</button>

    </div>
  );
};




export default Navbar;



  

  
  
