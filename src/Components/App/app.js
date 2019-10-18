import React, { Component } from 'react'
import Home from '../Home/Home.js'
import NavBar from '../NavBar/NavBar.js'
import About from '../About/About'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import './app.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';

class App extends Component {
    render() {
        return (
            <Router>
                <Helmet>
                    <style>{'body { background-color: #6F7E85; }'}</style>
                </Helmet>
                <div className='component'>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/Resume' component={Resume} />
                        <Route path='/About' component={About} />
                        <Route path = '/Contact' component={Contact}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App




