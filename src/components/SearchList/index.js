import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultsList from './ResultsList';

import List from '../List';
import ListItem from '../ListItem';
import LoadingIndicator from '../LoadingIndicator';
import SearchListItem from '../SearchListItem';

class SearchList extends Component {

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
        else if (this.props.items.length === 0) {
            return <span>
              <div> No records found, try another search term.</div>
            </span>;
        }
        else {
            return <ResultsList items={this.props.items} className="search-list" component={SearchListItem} />

        }
    }

}

SearchList.defaultProps = {
    state: "loading",
    message: "Message",
    items: [],
};

SearchList.propTypes = {
    state: PropTypes.string,
    message: PropTypes.string,
    items: PropTypes.any,
};

export default SearchList;
