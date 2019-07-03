import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Copyright from '../Copyright';
import Menu from '../Menu';
import Branding from './Branding';

class Footer extends React.Component {

  render() {
    const menu1 = this.props.links ? <Menu items={this.props.links.footer1} /> : null;
    const menu2 = this.props.links ? <Menu items={this.props.links.footer2} /> : null;

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
          {menu1}
          {menu2}
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
    links: PropTypes.object
};

export default Footer;

