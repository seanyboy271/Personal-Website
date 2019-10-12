import React, { Component } from "react";
import Table from '../Table/table.js'


var data =[
    {id: 1, name: "sean", value: "beep"}
]
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Table data={data}/>
            </React.Fragment>
        );
    }
}

export default Home