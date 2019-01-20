import React from 'react';
import PropTypes from 'prop-types';

function PageItemResource(props) {
  const label = props.label ? <strong>{props.labelValue}:</strong> : '';
  const resource = props.data.doc;
  const item =
    <div style={{position: "relative"}}>
      <a style={{padding: "0 0 0 40px", lineHeight: "50px"}}
            href={props.data.value} title={`${resource.format}`}>
        <span
          data-toggle='tooltip'
          data-placement='top'
          data-original-title={resource.format}
          data-format={resource.format}
          className='format-label'
          >
            {resource.format}
          </span>
          {props.data.value}
      </a>
    </div>
  return (
    <div style={{padding: "15px 0 0 0", clear: "both"}}>
      {label} {item}
    </div>
  );
}

PageItemResource.propTypes = {
  item: PropTypes.any,
  field: PropTypes.any,
};

export default PageItemResource;
