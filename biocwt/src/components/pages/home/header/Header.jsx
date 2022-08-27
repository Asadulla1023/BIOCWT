import "./Header.css"

import { AboutWood } from "../aboutWood/AboutWood";
import {  } from "./images/logo.png";

export const Header = () => {
  return (
    <div class="head">
      <div class="home">
        <div class="container">
          <div class="header">
            <div class="navigation">
              <div class="logo">
                <a href="./index.html">
                  <img src="" alt="efwfwef" />
                </a>
              </div>
              <div class="navigate">
                <ul>
                  <li>
                    <a href="/pages/Gallery.html">Gallery</a>
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
            <div class="header__main">
              <div class="cont">
                <div class="main__left">
                  <h2>Solid wood products</h2>
                  <p>
                    Oak, beech, ash from <span>1700 CZK</span> per m3
                  </p>
                  <button>Order</button>
                </div>
                <div class="main__center"></div>
                <div class="main__right">
                  <img
                    class="header__img"
                    src="/assets/images/header__img.png"
                    alt="ws"
                  />
                  <img
                    class="header__img2"
                    src="/assets/images/header__img2.png"
                    alt="sw"
                  />
                  <img
                    class="header__img"
                    src="/assets/images/header__img3.png"
                    alt="sw"
                  />
                </div>
              </div>
            </div>
          </div>
          <AboutWood/>
        </div>
      </div>
    </div>
  );
};
