import React from 'react'

import logo from "./../home/header/images/logo.png"

import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">
            <div className="navigation">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navigate">
                    <ul>
                        <li>
                            <Link to="/gallary">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/price">Prices for services</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
