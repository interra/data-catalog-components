import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import List from '../List';
import ListItem from '../ListItem';
import LoadingIndicator from '../LoadingIndicator';

class OrgBlock extends Component {

  render() {
      if (this.props.state === "loading") {
          return <List component={LoadingIndicator} />;
      }
      else if (this.props.state === "error") {
          const ErrorComponent = () => (
              <ListItem item={'Something went wrong, please try again!'} />
          );
          return <List component={ErrorComponent} />;
      }
      else {
          return (
              <Wrapper>
                <a href="organization/ + `{this.props.identifier}`">
                  <img src={this.props.icon} />
                  <strong>{this.props.title}</strong>
                  {this.props.description}
                </a>
              </Wrapper>
          );
      }
  }
}

OrgBlock.defaultProps = {
    state: "loading",
    icon: "https://s3.amazonaws.com/dkan-default-content-files/files/group.png",
    title: "Org Name",
    identifier: "1234",
    description: "This is a little information about the organization."
};

OrgBlock.propTypes = {
    state: PropTypes.string,
    item: PropTypes.any,
};

export default OrgBlock;

