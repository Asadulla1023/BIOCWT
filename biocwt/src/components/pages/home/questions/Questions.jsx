import React from 'react'

import oldWood from "./images/oldWood.png"

import { useRef } from 'react'

export const Questions = () => {
    const nameRef = useRef("")
    const telRef = useRef("")
    const texareaRef = useRef("")
    const clearInputsHandler = () => {
        nameRef.current.value = ""
        telRef.current.value = ""
        texareaRef.current.value = ""
        
    }
    return (
        <div className="questions">
            <h2>Any questions?</h2>
            <div className="questions__form">
                <div className="form">
                    <form action="#">
                        <input type="text" placeholder="Your name" ref={nameRef} id="Name" required />
                        <input type="tel" placeholder="Your telephone number" ref={telRef} id="number" required />
                        <textarea id="about" cols="30" rows="10" placeholder="Your question" ref={texareaRef} required></textarea>
                        <button type="submit" onClick={
                            clearInputsHandler}>Send</button>
                    </form>
                </div>
                <div className="whatCanIWrite">
                    <p>Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</p>
                    <img src={oldWood} alt="oldWood" />
                </div>
            </div>
        </div>
    )
}
