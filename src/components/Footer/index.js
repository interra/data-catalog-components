import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Copyright from '../Copyright';

class Footer extends React.Component {

  render() {

    return (
      <Wrapper className="page-footer">
        <Copyright />
      </Wrapper>
    );
  }
}

export default Footer;
