import React, { Component } from "react";
import {BootstrapTable, 
  TableHeaderColumn} from 'react-bootstrap-table';
import './table.css'


class Table extends Component {
  render() {
    return (
      <div className='size'>
         <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'>
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default Table