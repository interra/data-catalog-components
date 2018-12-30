import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

import List from '../List';
import ListItem from '../ListItem';
import LoadingIndicator from '../LoadingIndicator';
import HomePageIconListItem from '../HomePageIconListItem';


class HomePageIconList extends Component {

    computeGrid(numberOfItems) {
        let number = 1;
        if (numberOfItems === 2) {
            number = 6;
        }
        else if (numberOfItems === 3) {
            number = 4;
        }
        else if (numberOfItems === 4) {
            number = 3;
        }
        else if (numberOfItems === 5 || numberOfItems === 6) {
            number = 2;
        }
        return number;
    }

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
            const columnWidth = this.computeGrid(this.props.items.length);

            const items = this.props.items.map(function(item) {
                item.ref = item.identifier;
                item.title = item.identifier;
                item.columnWidth = columnWidth;
                item.click = "nah";
                item.icon = "crown-3";
                return item;
            });

            return <Wrapper><List items={items} component={HomePageIconListItem} /></Wrapper>;
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
