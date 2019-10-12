import React, { Component } from 'react'
import Home from '../Home/Home.js'
import Sidebar from '../Sidebar/Sidebar.js'
import NavBar from '../NavBar/NavBar.js'
import Bio from '../Bio/Bio'
import './app.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div id='parentFrame'>
                <Router>
                <NavBar />
                <Sidebar />
                    <div>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/Bio' component={Bio} />
                            {/* <Route path='/' component={Home} /> */}
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App




