import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './container/Home';
import About from './container/About';
import Resume from './container/Resume';
import Contact from './container/Contact';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { HiX } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import Footer from './components/Sidebar/Footer';


function App() {
  
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const [showMenu, setShowMenu] = useState(false);
 

  const handleToggleIcon = () => {
    setShowMenu(!showMenu);
  };
  const handleNavItemClick = () => {
    // Close the menu when a navigation item is clicked
    setShowMenu(false);
  };



  return (
<>
   
  
    <div className={'app-container'}>
    
        
      <div className="icons" onClick={handleToggleIcon}>
        {showMenu ? <HiX size={30} /> : <FaBars size={30} />}
      </div>

      {/* Sidebar and Navbar for small screens */}
      <div className={`${!isSmallScreen && 'menu'} ${showMenu ? 'menu-active' : ''}`}>
        <div className='sidebar-menu'>
          <Sidebar className="sidebar" />
        </div>
         <div className="navbar-menu ">
          <Navbar className="navbar-container" onNavItemClick={handleNavItemClick}/>
        </div>
        <div className='footer-menu'>
        <Footer className='footer-menu' />
        </div>
      
       
      </div>

      
      {/* Pages container */}
      <div className={`pages-container ${isSmallScreen ? 'full-width' : ''}`}>
      
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/resume" element={<Resume />} />
          <Route index path="/contact" element={<Contact />} />
         
        </Routes>
      
      </div>

      {/* Navbar for large screens */}
     
    
     
    </div>
    </>
  );
}

export default App;