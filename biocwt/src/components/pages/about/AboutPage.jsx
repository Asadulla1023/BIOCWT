import React from 'react'

import { Header } from './Header'

import { About, DemoCarousel, Questions, Footer } from '../home'

const AboutPage = () => {
  return (
    <div className="head">
      <div className="home">
        <div className="container">
          <Header /> 
          <About/>
          <DemoCarousel/>
          <Questions/>
        </div>        
      </div>
      <Footer/>
    </div>
  )
}
export default AboutPage