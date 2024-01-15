// Sidebar.js

import React from 'react';
import './Sidebar_style.css';
import img from './aa.png';



const Sidebar = () => {
 

  return (
    <div className='sidebar sidebar-container side'>
      <img className='image' src={img} alt="aa" />
      <h1 className='sidebar-name'>Ayesha Rani </h1>
      <h4 className='sidebar-sub'>Web Developer</h4>
    
    </div>
  );
}

export default Sidebar;
