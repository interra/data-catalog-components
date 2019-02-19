import React, { Component } from 'react';

import Text from '../Text';

class Table extends Component {

    render() {

        const { data, configuration} = this.props;

        const fields = Object.keys(configuration);

        if (fields.length == 0) {
            return (<div></div>)
        }

        const mapped = fields.map((field, index) =>
          {
            const Component = String;
            const label = 'label' in configuration[field] ? configuration[field].label : '';
            const value = data[field];
            return {label: label, value: value};
          }
        );


          const rows = mapped.map((row, index) => {
            return (<tr key={row.label}><td>{row.label}</td><td><Text value={row.value}/></td></tr>);
          });

          if (rows.length) {
            return (
              <span>
                <h3>Additional Information</h3>
                <table className="table table-bordered table-hover table-striped">
                  <thead>
                  <tr>
                    <th>Label</th>
                    <th>Value</th>
                  </tr>
                  </thead>
                  <tbody>
                  {rows}
                  </tbody>
                </table>
              </span>
            );
          } else {
            return (<span></span>);
          }

        }
}

export default Table;
