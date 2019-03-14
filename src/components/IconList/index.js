import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconListItem from '../IconListItem';
import Wrapper from './Wrapper';

function IconList(props) {
  let content = (<div></div>);
  const paneTitle = props.paneTitle;
  const className = props.className;

  // If we have items, render them
  if (props.items) {
      content = props.items.map((item) => (
          <IconListItem key={`item-${item.ref}`} item={item} />
      ));
  } else {
      // Otherwise render a single component
      content = (<IconListItem />);
  }

  return (
      <Wrapper className="container-fluid">
      <h2 className="pane-title">{ paneTitle }</h2>
        <ul className={ className }>
          {content}
        </ul>
      </Wrapper>
  );
}

IconList.defaultProps = {
  items: [],
  className: "icon-list",
  paneTitle: "Icon List"
};

IconList.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  paneTitle: PropTypes.string
};

export default IconList;
