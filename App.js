import React from "react"
import ReactDOM from "react-dom"
import About from "./components/About"
import Contact from "./components/Contacts"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Photo from "./components/Photo"

// import { createRoot } from 'react-dom/client';

function App() {
    return (
        <div>
            <Photo />
            <Info />
            <Contact />
            <About />
            <Footer />
        </div>
    )
}

export default App