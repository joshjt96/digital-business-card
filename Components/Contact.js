import React from "react"
import ReactDOM from "react-dom"
// import { createRoot } from 'react-dom/client';

function Contact() {
    return (
        <div className="contact-div">
            <button className="email-btn"><img className="btn-img" src="images/Icon.png"></img><a href="/" className="email-text">Email</a></button>
            <button className="linkedin-btn"><img className="btn-img"  src="images/Vector.png"></img><a href="/">LinkedIn</a></button>
        </div>
    )
}

export default Contact