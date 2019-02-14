import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import IconCSV from '../Icons/IconCSV';


function FileDownload(props) {

  const { label, resource } = props;

  const item =
    <Wrapper style={{position: "relative"}}>
      <IconCSV/>
      <a style={{lineHeight: "50px"}}
            href={resource.downloadURL} title={resource.format}>
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

FileDownload.propTypes = {
  item: PropTypes.any,
  field: PropTypes.any,
};

export default FileDownload;
