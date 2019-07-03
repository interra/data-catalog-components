import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Copyright from '../Copyright';
import Menu from '../Menu';
import links from '../../../stories/_menu.json';
import Branding from './Branding';

class Footer extends React.Component {

  render() {

    return (
      <Wrapper className="page-footer">
        <div className="container">
          <Branding>
            <h3>Open Source Open Data</h3>
            <p>
              We can only realize the full power of open data when the tools used for its collection, publishing and analysis are also open and transparent.
            </p>
            <Copyright />
            <div className="social">
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-github" aria-hidden="true" />
            </div>
          </Branding>
          <Menu items={links.footer1} />
          <Menu items={links.footer2} />
        </div>
      </Wrapper>
    );
  }
}

Footer.defaultProps = {
    state: "loading",
};

Footer.propTypes = {
    state: PropTypes.string,
    item: PropTypes.any,
};

export default Footer;

