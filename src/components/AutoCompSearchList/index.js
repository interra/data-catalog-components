import React from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import ListItem from '../ListItem';
import LoadingIndicator from '../LoadingIndicator';
import HomeListItem from '../HomeListItem';
import Wrapper from './Wrapper';
import InnerWrapper from './InnerWrapper';

function AutoCompSearchList({ loading, error, results, query }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (results !== false) {
    if (0 < 1) {
      return <Wrapper><InnerWrapper style={{fontSize: ".9em"}}>No results returned for "{query}"</InnerWrapper></Wrapper>
    }
    else {
      return <Wrapper><InnerWrapper><List items={results} component={HomeListItem} /></InnerWrapper></Wrapper>;
    }
  }

  return null;
}

AutoCompSearchList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  results: PropTypes.any,
};

export default AutoCompSearchList;
