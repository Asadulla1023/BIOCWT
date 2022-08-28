import React from 'react'

import "./../header/Header.css"

import Ash from "./images/Ash.png"
import Oak from "./images/Oak.png"
import Buk from "./images/Buk.png"
import Right from "./images/right.svg"
import Ignore from "./images/ignore.svg"

export const AboutWood = () => {
  return (
      <div className="howWeDoIt">
      <div className="howWeDoIt__title">
        <h2>THE WOOD WE WORK WITH</h2>
      </div>
      <div className="about__section">
        <div className="object">
          <img
            src={Ash}
            alt="ashWood"
          />
          <h3>Ash</h3>
          <div className="about-object">
            <div className="checking">
              <img src={Right} alt="" />
              <p>Durability</p>
            </div>
            <div className="checking">
              <img src={Right} alt="" />
              <p>Beautiful texture</p>
            </div>
            <div className="checking">
              <img src={Right} alt="" />
              <p>Water resistance</p>
            </div>
            <div className="checking">
              <img src={Ignore} alt="" />
              <p>Expensive</p>
            </div>
          </div>
        </div>
        <div className="object">
          <img
            src={Oak}
            alt="oakWood"
          />
          <h3>Oak</h3>
          <div className="about-object">
            <div className="checking">
              <img src={Right} alt="" />
              <p>Durability</p>
            </div>
            <div className="checking">
              <img src={Ignore} alt="" />
              <p>Hard to handle</p>
            </div>
            <div className="checking hidden">
              <img src={Right} alt="" />
              <p>Water resistance</p>
            </div>
            <div className="checking hidden">
              <img src={Right} alt="" />
              <p>Water resistance</p>
            </div>
          </div>
        </div>
        <div className="object">
          <img
            src={Buk}
            alt=""
          />
          <h3>Buk</h3>
          <div className="about-object">
            <div className="checking">
              <img src={Right} alt="" />
              <p>Durability</p>
            </div>
            <div className="checking">
              <img src={Ignore} alt="" />
              <p>Hard to handle</p>
            </div>
            <div className="checking hidden">
              <img src="/assets/images/right.png" alt="" />
              <p>Water resistance</p>
            </div>
            <div className="checking hidden">
              <img src="/assets/images/right.png" alt="" />
              <p>Water resistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
