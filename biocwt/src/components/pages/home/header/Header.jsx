import "./Header.css"

import logo from "./images/logo.png"
import header__img from "./images/header__img.png"
import header__img2 from "./images/header__img2.png"
import header__img3 from "./images/header__img3.png"


import { AboutWood } from "../aboutWood";
import { DemoCarousel } from "../ourWork"
import { Advantages } from "../advantages"
import { About } from "../aboutUs"
import { Questions } from "../questions"
import { Footer } from "../footer"



export const Header = () => {
  return (
    <div className="head">
      <div className="home">
        <div className="container">
          <div className="header">
            <div className="navigation">
              <div className="logo">
                <a href="#e">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="navigate">
                <ul>
                  <li>
                    <a href="/pages/Gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/pages/Prices.html">Prices for services</a>
                  </li>
                  <li>
                    <a href="/pages/aboutUs.html">About us</a>
                  </li>
                  <li>
                    <a href="/pages/Contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__main">
              <div className="cont">
                <div className="main__left">
                  <h2>Solid wood products</h2>
                  <p>
                    Oak, beech, ash from <span>1700 CZK</span> per m3
                  </p>
                  <button>Order</button>
                </div>
                <div className="main__center"></div>
                <div className="main__right">
                  <img
                    className="header__img"
                    src={header__img}
                    alt="header__img"
                  />
                  <img
                    className="header__img2"
                    src={header__img2}
                    alt="header__img"
                  />
                  <img
                    className="header__img"
                    src={header__img3}
                    alt="header__img"
                  />
                </div>
              </div>
            </div>
          </div>
          <AboutWood />
          <Advantages/>
          <DemoCarousel/>
          <About/>
          <Questions/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
