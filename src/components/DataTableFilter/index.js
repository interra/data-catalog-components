import React from 'react'
import Wrapper from './Wrapper'
import StyledButton from '../Button';


class DataTableFilter extends React.Component {
  constructor(props) {
    super(props);

    const fields = props.columns.map((col) => {
      return <option value={`${col.value}`}>{`${col.name}`}</option>
    })
    const operator = props.query.map((op) => {
      return <option value={`${op.value}`}>{`${op.name}`}</option>
    })

    this.state = {
      rows: [{"column": "", "query": "", "value": ""}]
    };
    console.log(this.state.rows);
  }

  handleRowValueChange = idx => evt => {
    const newRows = this.state.rows.map((row, sidx) => {
      if (idx !== sidx) return row;
      return { ...row, value: evt.target.value };
    });

    this.setState({ rows: newRows });
  };

  handleAddRow = () => {
    this.setState({
      rows: this.state.rows.concat([{ column: "", query: "", value: "" }])
    });
  };

  handleRemoveRow = idx => () => {
    this.setState({
      rows: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };

  handleSubmit = evt => {
    const { rows } = this.state;
    alert(`Filters: ${rows.length} added`);
  };

  render() {
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
                {this.state && this.state.rows && this.state.rows.map((row, idx) => {
                  <tr>
                    <td>
                      <select defaultValue={row.column}>
                        <option value=""></option>
                        { fields }
                      </select>
                    </td>
                    <td>
                      <select defaultValue={row.query}>
                        <option value=""></option>
                        { operator }
                      </select>
                    </td>
                    <td>
                      <input type="text" placeholder="Enter value here" value={row.value} onChange={this.handleRowValueChange(idx)} />  
                    </td>
                    <td>
                      <StyledButton className="close" type="button" onClick={this.handleRemoveRow(idx)}><span aria-hidden="true">×</span></StyledButton>
                    </td> 
                  </tr>
                })}
              

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