import React from 'react'

import Advantage from "./images/advantage.png"

import "./../header/Header.css"

export const Advantages = () => {
    return (
        <div className="advantages">
            <h2>Advantages working with us</h2>
            <div className="advantages__main">
                <div className="left__side">
                    <img src={Advantage} alt="ladder" />
                </div>
                <div className="right__side">
                    <p>In-house carpentry production</p>
                    <p>
                        We only treat wood with environmentally friendly and safe
                        products
                    </p>
                    <p>Prices from the manufacturer, no extra charges</p>
                </div>
            </div>
            <div className="reseve">
                <button className="reseive">Receive a consultation</button>
            </div>
        </div>
    )
}
