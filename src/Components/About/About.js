import React, { Component } from "react";
import './About.css'
import Util from '../../Util.js'


class Bio extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="fit">
                    <p>
                        {Util.Bio.createBio()}
                        {Util.Bio.createBio()}
                    </p>
                </div>
            </React.Fragment>
        );
    }
}

export default Bio;