import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import IconCSV from '../Icons/IconCSV';
import IconDATA from '../Icons/IconDATA';
import IconJSON from '../Icons/IconJSON';
import IconPDF from '../Icons/IconPDF';
import IconRDF from '../Icons/IconRDF';
import IconXML from '../Icons/IconXML';

function FileDownload(props) {

  const { label, resource } = props;
  let icon = '<IconDATA/>';

  switch(resource.format.toUpperCase()) {
    case 'CSV':
      icon = <IconCSV/>;
      break;
    case 'JSON':
      icon = <IconJSON/>;
      break;
    case 'PDF':
      icon = <IconPDF/>;
      break;
    case 'RDF':
    case 'RDF+XML':
      icon = <IconRDF/>;
      break;
    case 'XML':
      icon = <IconXML/>;
      break;
    default:
      icon = <IconDATA/>;
  }

  const item =
    <div className="resource">
      {icon}
      <a href={resource.downloadURL} title={resource.format}>
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
    </div>
    
  return (
    <Wrapper className="file-download">
      {label} {item}
    </Wrapper>
  );
}

FileDownload.propTypes = {
  item: PropTypes.any,
  field: PropTypes.any,
};

export default FileDownload;
