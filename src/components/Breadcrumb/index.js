import React from 'react';
import PropTypes from 'prop-types';

function Breadcrumb(props) {

  let items = (<li></li>);

  if (!props.loading && props.breadcrumbs) {
    items = props.breadcrumbs.map((breadcrumb, i) => {
      let text = '';
      if (breadcrumb.icon) {
        text = <span className={`glyphicon glyphicon-${breadcrumb.icon}`}></span>;
      } else {
        text = `${breadcrumb.title}`;
      }
      let link = '';

      link = text

      return (<li key={breadcrumb.title}>{link}</li>)
    });

  }


  return (
    <ul className="breadcrumb" style={{backgroundColor: "inherit"}}>
      {items}
    </ul>
  );
}

Breadcrumb.propTypes = {
  loading: PropTypes.bool,
  breadcrumbs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

export default Breadcrumb;
