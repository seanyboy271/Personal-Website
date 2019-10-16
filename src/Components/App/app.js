import React, { Component } from 'react'
import Home from '../Home/Home.js'
import Sidebar from '../Sidebar/Sidebar.js'
import NavBar from '../NavBar/NavBar.js'
import About from '../About/About'
import Bio from '../Bio/Bio'
import './app.css'
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>

                <div className = 'component'>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/Bio' component={Bio} />
                        <Route path='/About' component={About} />
                        {/* <Route path='/' component={Home} /> */}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App




