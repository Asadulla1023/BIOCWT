import React from 'react'

import { Header } from '../about/Header'
import { Footer } from '../home'

import "./Error.css"

export const Error = () => {
    return (
        <>
        <div className="head">
            <div className="home">
                <div className="container">
                    <Header />
                    <div className="error">
                        <h1>404</h1>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
        </>
    )
}
