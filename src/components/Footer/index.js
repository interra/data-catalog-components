import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Copyright from '../Copyright'
import image from './od_80x15_blue.png'

class Footer extends React.Component {

  render() {

    return (
      <Wrapper className="page-footer">
        <div className="container-fluid">
          <p>
            <Copyright />
            <a href="https://opendefinition.org/od/2.1/en/"><img src={image} alt="Open Data"/></a>
          </p>
        </div>
      </Wrapper>
    );
  }
}

export default Footer;
