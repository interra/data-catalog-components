import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap';
import Wrapper from './Wrapper'
import StyledButton from '../Button';

class DataTableFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: [{ column: "", query: "", value: "", direction: 0 }],
      match: 'AND'
    };
  }

  handleRowValueChange = idx => evt => {
    const newRows = this.state.rows.map((row, sidx) => {
      if (idx !== sidx) return row;
      return { ...row, value: evt.target.value };
    });

    this.setState({ rows: newRows });
  };

  handleRowQueryChange = idx => evt => {
    const newRows = this.state.rows.map((row, sidx) => {
      if (idx !== sidx) return row;
      if (evt.target.value === ' sort by ' || evt.target.value === ' order by ') {
        return { ...row, query: evt.target.value, direction: 1 };
      }
      else {
        return { ...row, query: evt.target.value, direction: 0 };
      }
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

  handleOptionChange = changeEvent => {
    this.setState({
      match: changeEvent.target.value
    });
  };

  handleAddRow = () => {
    this.setState({
      rows: this.state.rows.concat([{ column: "", query: "", value: "", direction: 0 }])
    });
  };

  handleRemoveRow = idx => () => {
    this.setState({
      rows: this.state.rows.filter((s, sidx) => idx !== sidx)
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    let sql = '[Select * FROM ' + this.props.rid + '][WHERE ';
    let q = '';
    let order = '';
    let sort = '';
    const { rows, match } = this.state;
    rows.forEach(function(element) {
      switch(element.query) {
        case ' sort by ':
          sort = sort + element.column + ', ';
          break;
        case ' order by ':
          order = order + element.column + ', ';
          break;
        default:
          q = q + element.column + element.query + '"' + element.value + '" ' + match + ' ';
          break;
      }
    });
    sql = sql + q + ']';
    if (sort) {
      sql = sql + '[SORT BY ' + sort + ']';
    }
    if (order) {
      sql = sql + '[ORDER BY ' + order + ']';
    }
    sql = sql + ';';
    console.log(sql);
    alert(`Filters added: ${rows.length} rows`);
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
                {row.direction ? (
                  <select name="value" onChange={this.handleRowValueChange(idx)} value={row.value}>
                    <option value=""></option>
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder="Enter value"
                    value={row.value}
                    onChange={this.handleRowValueChange(idx)}
                  />
                )}
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
        <div className="options">
          <FormGroup check>
            <Label check>
              <Input 
                type="radio" 
                name="match" 
                value="AND" 
                checked={this.state.match === "AND"}
                onChange={this.handleOptionChange}
               />{' '}
              Match all conditions
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input 
                type="radio" 
                name="match" 
                value="OR" 
                checked={this.state.match === "OR"}
                onChange={this.handleOptionChange}
              />{' '}
              Match any condition
            </Label>
          </FormGroup>

          <StyledButton bsclass="btn btn-primary">Apply Filters</StyledButton>
        </div>
      </Wrapper>
    );
  }
}

export default DataTableFilter;