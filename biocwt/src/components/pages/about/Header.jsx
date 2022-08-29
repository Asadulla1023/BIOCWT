import React from 'react'

import logo from "./../home/header/images/logo.png"


export const Header = () => {
    return (
        <div className="header">
            <div className="navigation">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="navigate">
                    <ul>
                        <li>
                            <a href="/gallary">Gallery</a>
                        </li>
                        <li>
                            <a href="/price">Prices for services</a>
                        </li>
                        <li>
                            <a href="/about">About us</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
