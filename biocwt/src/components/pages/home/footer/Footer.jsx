import React from 'react'

import logo from "./images/logo.svg"
import tel from "./images/tel.svg"
import location from "./images/location.svg"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="logo">
            <a href="/"><img src={logo} alt=""/></a>
          </div>
          <ul>
            <li><img src={tel} alt="callIcon"/><a href="tel:+998991234567">+998991234567</a></li>
            <li><img src={location} alt="locationIcon"/><a href="https://www.google.com/maps/place/%D0%90%D0%BB%D0%BC%D0%B0%D0%B7%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3602741,69.1823245,13z/data=!3m1!4b1!4m5!3m4!1s0x38ae8c479e45ded7:0xb0939da2a41a79de!8m2!3d41.3645355!4d69.2281531">View more</a></li>
          </ul>
        </div>
        <div className="privacy"><a href="#wd">Privacy Policy</a></div>
      </div>
    </div>
  )
}
