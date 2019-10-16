import React, { Component } from "react";
import './Bio.css'
import Util from '../../Util.js' 


class Bio extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="fit">
                   {Util.Bio.createBio()}
                </div>
            </React.Fragment>
        );
    }
}

export default Bio;