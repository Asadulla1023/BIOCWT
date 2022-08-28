import React from 'react'

import Advantage from "./images/advantage.png"

import "./../header/Header.css"

export const Advantages = () => {
    return (
        <div class="advantages">
            <h2>Advantages working with us</h2>
            <div class="advantages__main">
                <div class="left__side">
                    <img src={Advantage} alt="ladder" />
                </div>
                <div class="right__side">
                    <p>In-house carpentry production</p>
                    <p>
                        We only treat wood with environmentally friendly and safe
                        products
                    </p>
                    <p>Prices from the manufacturer, no extra charges</p>
                </div>
            </div>
            <div class="reseve">
                <button class="reseive">Receive a consultation</button>
            </div>
        </div>
    )
}
