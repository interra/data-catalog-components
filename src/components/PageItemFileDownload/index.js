import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
// import '../../theme/dkan-flaticon.css';

function PageItemResource(props) {
  const label = props.label ? <strong>{props.labelValue}:</strong> : '';
  const resource = props.data.doc.distribution.pop();

  const item =
    <Wrapper style={{position: "relative"}}>
      <a style={{padding: "0 0 0 40px", lineHeight: "50px"}}
            href={`${resource.downloadURL}`} title={`${resource.format}`}>
        <span
          data-toggle='tooltip'
          data-placement='top'
          data-original-title={resource.format}
          data-format={resource.format}
          className='format-label'
          >
            {resource.format}
          </span>
          {resource.title}
      </a>
    </Wrapper>
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
