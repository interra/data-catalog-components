import React from 'react';
import PropTypes from 'prop-types';

class StepsBlock extends React.PureComponent {

  render() {
    const { content } = this.props;

    return (
      <div key={this.props.content.ref} className="steps-block">
        <div className="steps-step">{this.props.content.step}</div>
        <h3>{this.props.content.title}</h3>
        <p>{this.props.content.content}</p>
      </div>
    )
  }
}

StepsBlock.propTypes = {
  step: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default StepsBlock
