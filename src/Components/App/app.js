import React, { Component } from 'react'
import Table from '../Table/table.js'
import NavBar from '../NavBar/NavBar.js'

var props = {a: '1'}

class App extends Component {
    render() {
        return (
            <div className="container"> 
                <NavBar x={"lol"}/>
                <Table />
            </div>
        )
    }
}
export default App