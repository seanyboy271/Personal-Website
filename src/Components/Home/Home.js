import React, { Component } from "react";
import Table from '../Table/table.js'
import Util from '../../Util.js'
import './Home.css'
import { Link } from 'react-router-dom'



class Home extends Component {

    render() {

        return (
            <div className='homePage'>
                <div className='section section1'>
                    <div className='main-text fade-in-main'>
                        Developer
                        <br />
                        <Link to='contact'>
                            <button className='contactButton fade-in-button'>
                                <div className='contactButtonText'>
                                    Contact me
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>


                <div className='bottom-section'>
                    <div className='section2'>
                        <div className='main-text-section2'>
                            Who I am
                        </div>

                        <div className='sub-text'>
                            {Util.Bio.createBio()}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home