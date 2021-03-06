import React, { Component } from 'react'
import Home from '../Home/Home.js'
import NavBar from '../NavBar/NavBar.js'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import About from '../About/About'
import './app.css'


class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Home />
                <About />
                <Resume />
                <Contact />
            </React.Fragment>

        );
    }
}

export default App




