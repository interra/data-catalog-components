import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    // This is evil. Need to pass location prop.
    const current = window.location.pathname;
    let activeClass = function(route) {
      if (route === current) {
        return 'active';
      }
    }
    return (
      <div>

        <Img src="/logo.svg" alt="Logo" />

        <NavBar>
          <HeaderLink className={activeClass('/about')} to="/about">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink className={activeClass('/search')} to="/search">
            Search
          </HeaderLink>
          <HeaderLink className={activeClass('/groups')} to="/groups">
            Groups
          </HeaderLink>
          <HeaderLink className={activeClass('/api')} to="/api">
            API
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
