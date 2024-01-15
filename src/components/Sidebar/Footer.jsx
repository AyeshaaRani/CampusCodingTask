import React from 'react'
import { Link } from 'react-router-dom'
import { FaSquareInstagram } from "react-icons/fa6";

const footer = () => {
  return (
    <div className='footer side'>
       <div className='contact-icons'> 
        <Link className='a' to="https://www.linkedin.com/in/ayesha-rani-5a8b7a219/" target='_blank'><i className="fab fa-linkedin"></i></Link>
        <Link className='a' to="https://www.instagram.com/ayeshaaa_rani/" target='_blank'><FaSquareInstagram /></Link>
       
      </div>
      <div className='header-button'>
        <br></br>
    <Link to="mailto:ayesharani6788@gmail.com"  className='a btn btn-primary'> Contact</Link>
     </div>
     <br/>
    <footer>&copy;2024 all right reserved</footer>

    </div>
  )
}

export default footer
