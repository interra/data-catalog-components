import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopicsList from './TopicsList';
import HomePageIconListItem from '../HomePageIconListItem';
import Wrapper from './Wrapper';

class HomePageIconList extends Component {

  render() {
    const { items } = this.props;
    return (
      <Wrapper className="container-fluid">
        <h2 class="pane-title">DATASET TOPICS</h2>
        <TopicsList items={items} className="topics-list" component={HomePageIconListItem} />
      </Wrapper>
    );
  }

}

HomePageIconList.defaultProps = {
  items: [],
};

HomePageIconList.propTypes = {
  items: PropTypes.any,
};

export default HomePageIconList;
