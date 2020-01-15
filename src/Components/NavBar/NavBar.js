import React, { Component } from "react";
import './NavBar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NavBar extends Component {

    scrollToResume() {
        let resumeComponent = document.getElementById("resumeComponent");
        console.log(resumeComponent)
        if (resumeComponent !== null) {
            resumeComponent.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
        }
    }

    scrollToAbout() {
        let AboutSection = document.getElementById("AboutSection");
        console.log(AboutSection)
        if (AboutSection !== null) {
            AboutSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
        }
    }

    scrollToContact() {
        let contactComponent = document.getElementById("contactComponent");
        console.log(contactComponent)
        if (contactComponent !== null) {
            contactComponent.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
        }
    }

    scrollToTop(){
        window.scrollTo({top: 0, behavior:"smooth"});
    }

    render() {
        return (
            <div id='Navbar' className='absolute'>

                <div className='logo' id="logo" onClick = {() => this.scrollToTop()}></div>

                <nav id='navbar' className="navbar justify-content-center navbar-trans" >
                    <div className='spacing navbar-brand navbar-item' onClick={() => this.scrollToAbout()}>
                        About
                    </div>
                    <div className='spacing navbar-brand navbar-item' onClick={() => this.scrollToResume()}>
                        Resume
                    </div>

                    <div className='spacing navbar-brand navbar-item' onClick={() => this.scrollToContact()}>
                        Contact Me
                    </div>
                </nav>
            </div>

        );
    }
}


export default NavBar;