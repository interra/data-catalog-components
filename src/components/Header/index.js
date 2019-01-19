import React, { Component } from 'react';

import Logo from '../Logo';
import NavBar from '../NavBar';
import SiteName from './SiteName';
import Wrapper from './Wrapper';

class Header extends Component {

    render() {
      return (
        <Wrapper>
          <div className="container-fluid">
            <div className="branding">
              <Logo/><SiteName/>
            </div>
          </div>
          <NavBar/>

        </Wrapper>
      );
    }
}

export default Header;
