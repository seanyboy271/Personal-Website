import React, { Component } from "react";
import './About.css'
import Util from '../../Util.js'


class Bio extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="fit s1">
                    
                        Bio Section!
                    
                </div>
                <div className="fit s2">
                    
                       Fun facts
                    
                </div>

                <div className="fit s3">
                    Social Media
             </div>
            </React.Fragment>
        );
    }
}

export default Bio;