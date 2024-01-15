import React, { useState, useEffect } from 'react';
import './Home_style.css';
import { AnimateKeyframes } from 'react-simple-animate'; 

const skills = ['Commputer System Engineer','Front-End Developer'];
const Home = () => {
  const [currentSkill, setCurrentSkill] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setCurrentSkill(skills[index]);
      index = (index + 1) % skills.length;
    }, 1500); // Change the duration as needed (in milliseconds)

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const onAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className='home'>
        <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={[
                      "opacity:1",
                      "opacity:0"
                    ]}
                    iterationCount="1"
                  >
      <h1 className='name-heading'>Ayesha Rani</h1>
      <div
        className={`sub skill-fade-in${isAnimating ? ' slide-in' : ''}`}
        onAnimationEnd={onAnimationEnd}
      >
        {currentSkill}
      </div>
      </AnimateKeyframes>
    </div>
  );
};

export default Home;
