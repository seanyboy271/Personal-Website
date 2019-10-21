import React, { Component } from "react";
import './About.css'
import Util from '../../Util.js'


class Bio extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="fit top">
                    
                        Bio Section!
                    
                </div>
                <div className="fit bottom">
                    
                       Project section!
                    
                </div>
            </React.Fragment>
        );
    }
}

export default Bio;