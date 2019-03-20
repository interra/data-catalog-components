import React from 'react'
import Wrapper from './Wrapper'
import StyledButton from '../Button';

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
    const { columns, operators } = this.props;
    const fields = columns.map((col) => {
      return <option value={`${col.value}`}>{`${col.name}`}</option>
    })
    const operator = operators.map((op) => {
      return <option value={`${op.value}`}>{`${op.name}`}</option>
    })

    return (
      <Wrapper onSubmit={this.handleSubmit}>
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
                  <option value=''></option>
                  { fields }
                </select>
              </td>
              <td>
                <select name="query" onChange={this.handleRowQueryChange(idx)} value={row.query}>
                  <option value=""></option>
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
                <StyledButton title="Delete" className="close" onClick={this.handleRemoveRow(idx)}>
                  <span aria-hidden="true">×</span>
                </StyledButton>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <a className="add-filter" onClick={this.handleAddRow}>+ Add Filter</a>
        <StyledButton className="btn btn-primary">Apply Filters</StyledButton>
      </Wrapper>
    );
  }
}

export default DataTableFilter;