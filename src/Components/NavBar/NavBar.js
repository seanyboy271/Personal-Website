
import React, { Component } from "react";
import './NavBar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-custom ">
          <Link to="/" className="navbar-brand spacing">
            <h1>
              Sean Kotrola's Website Extravaganza!
                <span className="badge badge-secondary">{this.props.x}</span>
            </h1>
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;