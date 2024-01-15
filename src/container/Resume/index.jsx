// index.js
import React from 'react';
import './style.css'; // Import your CSS file for styling
import { AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import { formal_Education, skills,  knowldge, } from './utils';
import { Animate } from 'react-simple-animate';

const index = () => {
  return (



  
    <div className='resume '>
       <Animate play
      duration={1.5}
      delay={-0.5}
      start ={{
        transform :'translateX(300px)'
      }}
      end={{
        transform :'translateX(0px)'
      }}>
      <h1 className='heading-resume'>Resume</h1>
      <div className='resume-container'>
        <div className='left-side'>

          <h2>Education</h2>

          <div className='education-container'>

            <div className='left-timeline'>
              {formal_Education.map((item, index) => (
                <div key={index} className='timeline-item'>


                  <div className='item-info'>
                    <div className='left-content'>
                      <span className='item-period'>{item.item_period}</span>
                      <span className='item-company'>{item.item_company}</span>
                    </div>
                    <div className="timeline-divider"><div className='timeline-indicator'></div></div>
                    <div className='right-content'>
                      <h3 className='item-title'>{item.item_title}</h3>
                      <p className='item-p'>{item.item_p}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         

        </div>
        <div className="right-side">
          <div className='skills'>
            <h3>Hacking Skills</h3>
            <ul className="hacking_skills">
              <div>
                {skills.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={[
                      "opacity:1",
                      "opacity:0"
                    ]}
                    iterationCount="1"
                  >
                    <div className='progressbar-wrapper' key={j}>
                      <div className='skill-info'>
                        <h4 className='skill-name'>{skillItem.skillName}</h4>
                        <div className='skill-value'>{skillItem.percentage}%</div>
                      </div>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth='2'
                        strokeColor='#182d39f9'
                        trailWidth='0'
                        strokeLinecap='round'
                        className='line'
                      />

                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </ul>

           
            <h3>Knowldge</h3>
            <ul className="knowldge">
              {knowldge.map((list, k) => (
                <li key={k} className='knowldges'>
                  {list.knowldge}
                </li>
              ))}

            </ul>
          </div>
          



      </div>
      </div>
     
      </Animate>

     
    </div>

  );
};

export default index;
