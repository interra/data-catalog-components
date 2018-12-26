/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './StyledLink';

export class HomeListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    // Put together the content of the repository
    const content = (
      <StyledLink to={`dataset/${item.doc.identifier}`}>
        { item.doc.title }
      </StyledLink>
    );

    const Listy = (props) => {
      return (<li key={props.itemKey}>
        {props.item}
      </li>);
    }

    // Render the content into a list item
    return (
      <Listy itemKey={`repo-list-item-${item.doc.identifier}`} item={content} />
    );
  }
}

HomeListItem.propTypes = {
  item: PropTypes.object,
};

export default HomeListItem;
