import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

class OrgBlock extends Component {

  render() {

      return (
          <Wrapper>
            <a href={"organization/" + this.props.identifier}>
              <img src={this.props.icon} />
              <h5>{this.props.title}</h5>
              {this.props.description}
            </a>
          </Wrapper>
      );

  }
}

OrgBlock.defaultProps = {
    icon: "https://s3.amazonaws.com/dkan-default-content-files/files/group.png",
    title: "Org Name",
    identifier: "1234",
    description: "This is a little information about the organization."
};

export default OrgBlock;

