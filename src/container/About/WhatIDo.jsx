import React from 'react'

const WhatIDo = () => {
  return (
    <div>
      <h2>What <span className='h3'>I Do?</span></h2>
      <div className="what-i-do-container">

        <div className="what-i-do-section">
          <i className="whatdoIdoIcons fa fa-user-secret" aria-hidden="true"></i>
          <h2>Front-end Development</h2>
          <p>I am a passionate web developer with a strong focus on frontend technologies, dedicated to creating visually stunning and user-friendly web experiences</p>
          <span className="whatdoIdoIcons lnr lnr-laptop-phone"></span>
          <h2>User-centric Design</h2>
          <p>
            In front-end development, my approach centers on crafting user-centric designs that seamlessly blend visual appeal with an intuitive and positive user experience.
          </p>
        </div>
        <div className="what-i-do-section">
          <span className="whatdoIdoIcons lnr lnr-pencil"></span>
          <h2>Responsive Web Design
          </h2>
          <p>
            In today's multi-device landscape, responsive web design is paramount. I specialize in building websites that adapt fluidly to different screen sizes, providing a consistent experience across desktops, tablets, and smartphones.
          </p>
          <span className="whatdoIdoIcons lnr lnr-flag"></span>
          <h2>Continuous Learning and Growth
          </h2>
          <p>
          In the ever-evolving front-end landscape, I stay current with the latest trends. From experimenting with new CSS features to exploring the latest JavaScript libraries, continuous learning keeps me at the forefront of my craft.
          </p>
        </div>
      </div>

    </div>
  )
}

export default WhatIDo
