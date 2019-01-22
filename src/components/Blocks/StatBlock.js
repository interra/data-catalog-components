import React from 'react';
import PropTypes from 'prop-types';

class StatBlock extends React.PureComponent {

  render() {
    const { content } = this.props;

    return (
      <div key={this.props.content.ref} className="stat-block">
        <i className={this.props.content.icon}></i>
        <h2>{this.props.content.title}</h2>
        <p>{this.props.content.content}</p>
      </div>
    )

  }
}

StatBlock.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default StatBlock
