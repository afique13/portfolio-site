
import React from 'react'
import reactDom from 'react-dom'
import "./index.css"
import Nav from './Components/Navbar/Nav'
import Header from "./Components/Header/Header"
import About from "./Components/About/About"

export const App = () => {

    return (
        <div className="container">
            <Nav />
            <Header />
            <About />
        </div>
    )
}

export default App
