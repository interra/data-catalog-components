import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Copyright extends React.Component {

  render() {

    return (
      <div className="copyright">
          {this.props.copyright} <a href={this.props.link}>{this.props.clickable}</a>
      </div>
    );
  }
}

Copyright.defaultProps = {
    copyright: "Powered by ",
    clickable: "DKAN",
    link: "http://getdkan.com"
};

Copyright.propTypes = {
    item: PropTypes.any,
};

export default Copyright;
