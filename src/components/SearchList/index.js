import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultsList from './ResultsList';

import SearchListItem from '../SearchListItem';

class SearchList extends Component {

  render() {
    const { items, message } = this.props;
    return ( 
      <>
        { message }
        <ResultsList items={items} className="search-list" component={SearchListItem} />
      </>
    )
  }

}

SearchList.defaultProps = {
  message: "",
  items: [],
};

SearchList.propTypes = {
  message: PropTypes.string,
  items: PropTypes.any,
};

export default SearchList;
