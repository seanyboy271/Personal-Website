import React, { Component } from "react";
import './NavBar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>

                <Link to='/' className='logo navbar-brand'>
                    Logo goes here
                </Link>

                <nav className="navbar justify-content-center navbar-trans" >



                    <Link to="/Bio" className="navbar-brand navbar-item" >
                        <div className='spacing'>
                            Bio
                    </div>
                    </Link >

                    <Link to="/About" className="navbar-brand navbar-item" >
                        
                            <div className='spacing'>
                                About
                            </div>
                        
                    </Link >


                </nav>
            </React.Fragment >
        );
    }
}

export default NavBar;