

import React from 'react';
import './About-style.css';
import WhatIDo from './WhatIDo';
import { Link } from 'react-router-dom';
import ProgressResport from './ProgressResport';
import { Animate , AnimateKeyframes} from 'react-simple-animate';


const AboutMe = () => {


  return (
    <div className='about'>
      
      <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform:'translateX(-200px)'
        }}
        end={ {transform:'translateX(0px)'}}>
           <AnimateKeyframes
              play
              duration={1}
              keyframes={[
                "opacity:1",
                "opacity:0"
                ]}
                iterationCount = "1"

                >
       <h1 className=''>About Me</h1>
    <div className="  about-me-container">
      <div className="about-me-heading" style={{color:'#555'}}>
       
        <p >
          Hi everyone! My name is <b>Ayesha Rani</b>."I'm a dedicated frontend web developer with a passion for creating stunning, user-friendly websites. Proficient in HTML, CSS, JavaScript, and leading frameworks, I bring designs to life with responsive and interactive web solutions.
        </p>
        <p>
        I specialize in front-end utilizing a diverse skill set to bring ideas to life. On the front end, I have a keen eye for design, ensuring that the user interface is not only functional but also visually appealing. HTML, CSS, and JavaScript are my playground, and I love turning a static design into a dynamic and interactive user interface.
        </p>
      </div>
      <div className="about-me-details" style={{color:'#555'}}>
        <ul>
          <li><span>Age:</span> 21</li>
          <li><span>Residence:</span> Pakistan</li>
     <li><span  >E-mail:</span>   
      <Link style={{color:'#555'}} className='email' to="mailto:ayesharani6788@gmail.com"> ayesharani6788@gmail.com</Link>
      </li>
        </ul>
      </div>
    </div>



<WhatIDo/>

<ProgressResport/>



</AnimateKeyframes>
</Animate>
</div>
  );
};

export default AboutMe;
