import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopicsList from './TopicsList';

import List from '../List';
import ListItem from '../ListItem';
import LoadingIndicator from '../LoadingIndicator';
import HomePageIconListItem from '../HomePageIconListItem';

class HomePageIconList extends Component {

    render() {
        if (this.props.state === "loading") {
            return <List component={LoadingIndicator} />;
        }
        else if (this.props.state === "error" || this.props.items.length === 0) {
            const ErrorComponent = () => (
                <ListItem item={'Something went wrong, please try again!'} />
            );
            return <List component={ErrorComponent} />;
        }
        else {

            const items = this.props.items.map(function(item) {
                item.ref = item.identifier;
                item.title = item.identifier;
                item.click = "nah";
                item.icon = item.icon;
                return item;
            });

            return (
                <TopicsList items={items} className="topics-list" component={HomePageIconListItem} />
            );
        }
    }

}

HomePageIconList.defaultProps = {
    state: "loading",
    items: [],
};

HomePageIconList.propTypes = {
    state: PropTypes.string,
    items: PropTypes.any,
};

export default HomePageIconList;
