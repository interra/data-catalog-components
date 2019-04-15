import React from 'react';
import PropTypes from 'prop-types';

import { Parser } from 'html-to-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  body div.dataset-body {
    clear: both;
  }
`;

function Text(props) {
  const label = (props.label && props.label.length > 0) ? <strong>{props.label}:</strong> : '';
  const parser = new Parser();
  const text = props.value ?  parser.parse(props.value) : '';

  return (
    <>
      {label} {text}
    </>
  );
}

export default Text;
