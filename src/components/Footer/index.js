import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Copyright from '../Copyright';

class Footer extends React.Component {

  render() {

    return (
      <Wrapper className="page-footer">
        <div className="container-fluid">
          <Copyright />
        </div>
      </Wrapper>
    );
  }
}

export default Footer;
