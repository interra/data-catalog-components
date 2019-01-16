import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Copyright from '../Copyright';
import CustomMenu1 from './CustomMenu1';
import CustomMenu2 from './CustomMenu2';
import Branding from './Branding';

class FooterCustom extends React.Component {

  render() {

    return (
      <Wrapper className="page-footer">
        <div className="container">
          <Branding>
            <img src={this.props.footerlogo} alt="Medicare" />
            <h3>Medicare.org</h3>
            <p>
              A federal government website managed and paid for by the <br />
              <a href="https://www.cms.gov/">U.S Centers for Medicare & Medicaid Services</a>
            </p>
            <div className="social">
              <i className="fa fa-youtube-play" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
            </div>
          </Branding>
          <CustomMenu1 />
          <CustomMenu2 />
          <Copyright />
        </div>
      </Wrapper>
    );
  }
}

FooterCustom.defaultProps = {
    state: "loading",
    footerlogo: "http://pqdc.semanticbits.com/sites/default/files/medicare_logo.svg"
};

FooterCustom.propTypes = {
    state: PropTypes.string,
    item: PropTypes.any,
};

export default FooterCustom;
