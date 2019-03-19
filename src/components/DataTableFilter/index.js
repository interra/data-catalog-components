import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Wrapper from './Wrapper'
import StyledButton from '../Button';

const columns = [
  {
    name: "Name",
    value: "name"
  },
  {
    name: "Age",
    value: "age"
  },
  {
    name: "Disposition",
    value: "disposition"
  }
];

const operators = [
  {
    "name": "Contains",
    "value": "contains"
  },
  {
    "name": "Equal to",
    "value": "equal"
  },
  {
    "name": "Not equal to",
    "value": "notequal"
  },
  {
    "name": "Greater than",
    "value": "greater"
  },
  {
    "name": "Less than",
    "value": "less"
  }
];

class DataTableFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      rows: [],
    };

    // this.handleRemoveRow = this.handleRemoveRow.bind(this);
    // this.handleAddRow = this.handleAddRow.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleAddRow = () => {
    this.setState((prevState, props) => {
      const row = { 
        column: 'column-' + prevState.rows.length,
        op: 'op-' + prevState.rows.length,
        userinput: 'user-input-' + prevState.rows.length
      };
      return { rows: [...prevState.rows, row] };
    });
  };

  handleRemoveRow = () => {
    this.setState((prevState, props) => {
      return { rows: prevState.rows.slice(1) };
    });
  };

  render() {
    const fields = columns.map((col) => {
      return <option value={`${col.value}`}>{`${col.name}`}</option>
    })
    const operator = operators.map((op) => {
      return <option value={`${op.value}`}>{`${op.name}`}</option>
    })

    return (
      <Wrapper>
          <form>
              <h3>Filter Columns:</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Column Name</th>
                    <th>Filter</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.rows.map(row => (
                  <tr>
                    <td>
                      <select name={row.column}><option value=""></option>{ fields }</select>
                    </td>
                    <td>
                      <select name={row.op}>
                        { operator }
                      </select>
                    </td>
                    <td>
                      <input name={row.userinput} type="text" placeholder="Enter value here" value={this.state.value} onChange={this.handleChange} />  
                    </td>
                    <td>
                      <StyledButton className="close" type="button" onClick={this.handleRemoveRow}><span aria-hidden="true">×</span></StyledButton>
                    </td> 
                  </tr>
                ))}
                  <tr>
                    <td>
                      <select name="column">
                        <option value=''></option>
                        { fields }
                      </select>
                    </td>
                    <td>
                      <select name="op">
                        { operator }
                      </select>
                    </td>
                    <td>
                      <input id="input" type="text" placeholder="Enter value here" value={this.state.value} onChange={this.handleChange} />  
                    </td>
                    <td>
                    </td>                    
                  </tr>
                </tbody>
              </table>

            <a className="add-filter" onClick={this.handleAddRow}>+ Add filter</a>
            <StyledButton color="primary" className="btn btn-primary" type="button" onClick={this.handleSubmit}>Apply Filters</StyledButton>
          </form>
      </Wrapper>
    );
  }
}

export default DataTableFilter;