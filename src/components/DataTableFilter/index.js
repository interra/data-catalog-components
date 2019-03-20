import React from 'react'
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
      rows: [{ column: "", query: "", value: "" }]
    };
  }

  handleRowValueChange = idx => evt => {
    const newRows = this.state.rows.map((row, sidx) => {
      if (idx !== sidx) return row;
      return { ...row, value: evt.target.value };
    });

    this.setState({ rows: newRows });
    console.log(rows);
  };

  handleRowQueryChange = idx => evt => {
    const newRows = this.state.rows.map((row, sidx) => {
      if (idx !== sidx) return row;
      return { ...row, query: evt.target.value };
    });

    this.setState({ rows: newRows });
  };

  handleRowColumnChange = idx => evt => {
    const newRows = this.state.rows.map((row, sidx) => {
      if (idx !== sidx) return row;
      return { ...row, column: evt.target.value };
    });

    this.setState({ rows: newRows });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { rows } = this.state;
    console.log(rows);
    alert(`Filters added: ${rows.length} rows`);
  };

  handleAddRow = () => {
    this.setState({
      rows: this.state.rows.concat([{ column: "", query: "", value: "" }])
    });
  };

  handleRemoveRow = idx => () => {
    this.setState({
      rows: this.state.rows.filter((s, sidx) => idx !== sidx)
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
        <h3>Filter Columns:</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Column Name</th>
              <th>Filter</th>
              <th>Value</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          {this.state.rows.map((row, idx) => (
            <tr>
              <td>
                <select name="column" onChange={this.handleRowColumnChange(idx)} value={row.column}>
                  <option value=''>Select Column</option>
                  { fields }
                </select>
              </td>
              <td>
                <select name="query" onChange={this.handleRowQueryChange(idx)} value={row.query}>
                  <option value="">Select</option>
                  { operator }
                </select>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter value"
                  value={row.value}
                  onChange={this.handleRowValueChange(idx)}
                />
              </td>
              <td>
                <StyledButton className="close" onClick={this.handleRemoveRow(idx)}>
                  <span aria-hidden="true">×</span>
                </StyledButton>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <a className="add-filter" onClick={this.handleAddRow}>+ Add Filter</a>
        <StyledButton color="primary" className="btn btn-primary" type="button" onClick={this.handleSubmit}>Apply Filters</StyledButton>
      </Wrapper>
    );
  }
}

export default DataTableFilter;