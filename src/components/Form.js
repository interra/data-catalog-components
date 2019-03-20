import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

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

class Form extends React.Component {
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
      <form onSubmit={this.handleSubmit}>

        <h4>rows</h4>

        {this.state.rows.map((row, idx) => (
          <div>
            <select name="column" onChange={this.handleRowColumnChange(idx)} value={row.column}>
              <option value=''>Select Column</option>
              { fields }
            </select>
            <select name="query" onChange={this.handleRowQueryChange(idx)} value={row.query}>
              <option value="">Select</option>
              { operator }
            </select>
            <input
              type="text"
              placeholder="Enter value"
              value={row.value}
              onChange={this.handleRowValueChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemoveRow(idx)}
              className="small"
            >
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddRow}
          className="small"
        >
          Add Filter
        </button>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;