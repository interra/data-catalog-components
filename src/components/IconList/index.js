import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from "../List";
import IconListItem from '../IconListItem';
import Wrapper from './Wrapper';

class IconList extends Component {

  render() {
    const { items } = this.props;
    return (
      <Wrapper className="container-fluid">
        <h2 className="pane-title">DATASET TOPICS</h2>
        <List items={items} className="topics-list" component={IconListItem} />
      </Wrapper>
    );
  }

}

IconList.defaultProps = {
  items: [],
};

IconList.propTypes = {
  items: PropTypes.any,
};

export default IconList;
