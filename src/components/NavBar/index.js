import React, { Component } from 'react';

import Wrapper from './Wrapper'
import Link from './Link'

class NavBar extends Component {

    render() {
        // This is evil. Need to pass location prop.
        const current = window.location.pathname;
        let activeClass = function(route) {
            if (route === current) {
                return 'active';
            }
        }
        return (
          <Wrapper className="main-navigation">
            <div className="container-fluid">
              <Link className="{activeClass('/')}" href="/">
                  Home
              </Link>
              <Link className={activeClass('/search')} href="/search">
                  Search
              </Link>
            </div>
          </Wrapper>
        );
    }

}

export default NavBar;
