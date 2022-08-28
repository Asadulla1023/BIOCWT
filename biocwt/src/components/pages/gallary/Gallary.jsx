import React from 'react'

import { Header } from '../about/Header'

import { DemoCarousel } from "../home/ourWork/ourWork"
import { AboutWood, Questions, Footer } from '../home'

const Gallary = () => {
  return (
    <div className="head">
      <div className="home">
        <div className="container">
          <Header />
          <DemoCarousel />
          <AboutWood />
          <Questions />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallary