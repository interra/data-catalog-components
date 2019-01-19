import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopicsList from './TopicsList';
import HomePageIconListItem from '../HomePageIconListItem';

class HomePageIconList extends Component {

  render() {
    const { items } = this.props; 
    return (
      <TopicsList items={items} className="topics-list" component={HomePageIconListItem} />
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
