import React, { Component } from "react";
import Table from '../Table/table.js'
import Util from '../../Util.js'
import './Home.css'
import {Link} from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='main-text'>
                    Developer
                    <br />
                    <Link to='contact'>
                        <button className='contactButton'>

                            <div className='contactButtonText'>
                                Contact me
                        </div>

                        </button>
                    </Link>
                </div>
                {/* <Table data={data}/> */}
            </React.Fragment>
        );
    }
}

export default Home