import React from "react"
import ReactDOM from "react-dom"
// import { createRoot } from 'react-dom/client';

function Contact() {
    return (
        <div className="contact-div">
            <button className="email-btn"><img className="btn-img" src="images/Icon.png"></img>Email</button>
            <button className="linkedin-btn"><img className="btn-img"  src="images/Vector.png"></img>LinkedIn</button>
        </div>
    )
}

export default Contact