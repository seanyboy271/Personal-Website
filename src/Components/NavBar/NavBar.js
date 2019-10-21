import React, { Component } from "react";
import './NavBar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            

                <div id='Navbar' className='absolute'>
                    <Link to='/'>
                        <div className='logo'>
                            
                        </div>
                    </Link>

                    <nav className="navbar justify-content-center navbar-trans" >

                        <Link to="/Resume" className="navbar-brand navbar-item" >
                            <div className='spacing'>
                                Resume
                    </div>
                        </Link >

                        <Link to="/About" className="navbar-brand navbar-item" >

                            <div className='spacing'>
                                About
                        </div>

                        </Link >
                    </nav>
                </div>
            
        );
    }
}

export default NavBar;