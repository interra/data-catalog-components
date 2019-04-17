import React, { Component } from 'react';
import Wrapper from './Wrapper';

class Logo extends Component {

  const

    render() {
        return (
          <Wrapper href="/" className="logo">
            <img src={this.props.image} alt="Open Data Catalog" />
          </Wrapper>
        );
    }

}

Logo.defaultProps = {
    image: 'http://demo.getdkan.com/profiles/dkan/themes/nuboot_radix/logo.svg'
};

export default Logo;
