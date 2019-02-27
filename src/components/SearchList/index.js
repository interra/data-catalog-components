import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultsList from './ResultsList';

import SearchListItem from '../SearchListItem';

class SearchList extends Component {

  render() {
    const { items, message } = this.props;
    return (
      <React.Fragment>
        <div className="results-message">{ message }</div>
        <ResultsList items={items} className="search-list" component={SearchListItem} />
      </React.Fragment>
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
