import React from 'react';
import { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Sidebar extends Component {
    constructor (props) {
        super(props)
            this.state = {
          menuOpen: false
        }
      }

      handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }

      toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
      }

      closeMenu () {
        this.setState({menuOpen: false})
      } 
    
    render() {
        return (
            <Menu isOpen={this.state.menuOpen}
            onStateChange={(state)=>this.handleStateChange(state)}> 

                <Link to="/bio" onClick={() => this.closeMenu()}>bioLink</Link>
                <Link to="/" onClick={() => this.closeMenu()}>Something else </Link>

            </Menu>

        );
    }
};


export default Sidebar;