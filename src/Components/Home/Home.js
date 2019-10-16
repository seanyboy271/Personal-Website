import React, { Component } from "react";
import Table from '../Table/table.js'
import Util from '../../Util.js'
import './Home.css'


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className='main-text'>
                        <h1>
                            Developer
                         </h1>
                    </div>
                {/* <Table data={data}/> */}
            </React.Fragment>
        );
    }
}

export default Home