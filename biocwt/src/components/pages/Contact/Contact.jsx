import "./index.css";

import React from "react";
import { Header } from "../about/Header";


const Contact = () => {
  return (
    <>
      <Header/>

      <section className="section">
        <div className="section__map">
          <a href="https://www.google.com/maps/place/%D0%90%D0%BB%D0%BC%D0%B0%D0%B7%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3602741,69.1823245,13z/data=!3m1!4b1!4m5!3m4!1s0x38ae8c479e45ded7:0xb0939da2a41a79de!8m2!3d41.3645355!4d69.2281531">
            <img src={require("./img/MAP.png")} alt="Map" />
          </a>
        </div>
        <div className="section__contact">
          <h1>Contact</h1>
        </div>
        <div className="section_icon">
          <ul>
            <li>
              <img src={require("./img/tel.svg").default} alt="callIcon" />
              <a href="tel:+998991234567">+998991234567</a>
            </li>
            <li className="location">
              <img
                src={require("./img/location.svg").default}
                alt="locationIcon"
              />
              <a href="https://www.google.com/maps/place/%D0%90%D0%BB%D0%BC%D0%B0%D0%B7%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3602741,69.1823245,13z/data=!3m1!4b1!4m5!3m4!1s0x38ae8c479e45ded7:0xb0939da2a41a79de!8m2!3d41.3645355!4d69.2281531">
                View more
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="footers">
        <div className="container">
          <div className="footer__mains">
            <div className="logo">
              <a href="/">
                <img src={require('./img/logo.svg').default} alt="" />
              </a>
            </div>
            <ul>
              <li>
                <img src={require("./img/tel.svg").default} alt="callIcon" />
                <a href="tel:+998991234567">+998991234567</a>
              </li>
              <li>
                <img
                  src={require("./img/location.svg").default}
                  alt="locationIcon"
                />
                <a href="https://www.google.com/maps/place/%D0%90%D0%BB%D0%BC%D0%B0%D0%B7%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3602741,69.1823245,13z/data=!3m1!4b1!4m5!3m4!1s0x38ae8c479e45ded7:0xb0939da2a41a79de!8m2!3d41.3645355!4d69.2281531">
                  View more
                </a>
              </li>
            </ul>
          </div>
          <div className="privacys">
            <a href="#wd">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
