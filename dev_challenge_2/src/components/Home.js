import React from 'react'
import figma from '../assets/figma.png'
import react from '../assets/react.png'
import mongodb from '../assets/mongodb.png'
import firebase from '../assets/firebase.png'
import nodejs from '../assets/nodejs.png'
import Nextjs from '../assets/Nextjs.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import led from '../assets/led.png'

const Home = () => {
  return (
    <section className='home-container'>
      <div className='home-container1'>
        <h1>Build something <br /> Amazing with us</h1>
        <p>We are a creative group of techies who build project with modern web technologies, <br /> you can checkout some of our most used <br /> technologies below</p>
        <img src={figma} alt="figma" />
        <img src={react} alt="react" />
        <img src={mongodb} alt="mongodb" />
        <img src={firebase} alt="firebase" />
        <br />
        <img src={nodejs} alt="nodejs" />
        <img src={Nextjs} alt="Nextjs" />
        <img src={css} alt="css" />
        <img src={html} alt="html" />
      </div>

      <div className='home-container2'>
        <img src={led} alt="led" />
      </div>     
    </section>
  )
}

export default Home