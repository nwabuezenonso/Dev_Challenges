//all styling in index.css

import React from 'react'
import { Link } from 'react-scroll/modules'

const Navbar = () => {
  return (
    <section className='header'>
        <div className='header-container'>
            <div className='header-title'>
                <p>{"<"}Techies<span>Fusion</span>{"/>"}</p> 
            </div>
            <div>
                <ul>
                    <li>
                    <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
                         Who are we</Link></li>             
                         <li>
                    <Link to="team" spy={true} smooth={true} offset={-50} duration={500}>
                         Our team</Link></li>    
                         <li>
                    <Link to="blogpage" spy={true} smooth={true} offset={0} duration={500}>
                         Blog</Link></li> 
                         <li>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                        Contact</Link></li> 
                </ul> 
            </div>         
        </div>
    </section>
  )
}

export default Navbar