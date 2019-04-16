import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Copyright from '../Copyright'

class Footer extends React.Component {

  render() {

    return (
      <Wrapper className="page-footer">
        <div className="container-fluid">
          <p>
            <Copyright />
          </p>
        </div>
      </Wrapper>
    );
  }
}

export default Footer;
