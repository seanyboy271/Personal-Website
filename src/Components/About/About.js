import React, { Component } from "react";
import './About.css'
import Util from '../../Util.js'


export default class About extends Component {
    render() {
        return (
            <div className='aboutMain' id='AboutSection'>
                <div className='aboutHeader'>
                    Who am I
                </div>

                <div className='aboutBlockContainer'>

                    <div className='block'>
                        <div className='blockHeader'>
                            Student
                        </div>
                        <ul>
                                <li>
                                    hello
                                </li>
                                <li>
                                    hello
                                </li>
                                <li>
                                    hello
                                </li>
                                <li>
                                    hello
                                </li>
                                <li>
                                    hello
                                </li>
                            </ul>
                    </div>

                    <div className='block'>
                        <div className='blockHeader'>
                            Developer
                        </div>
                    </div>

                    <div className='block'>
                        <div className='blockHeader'>
                            Other things
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}