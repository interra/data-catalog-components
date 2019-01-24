import React from 'react';
import PropTypes from 'prop-types';

import { Parser } from 'html-to-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  body div.dataset-body {
    clear: both;
  }
`;

function PageItemText(props) {
  const label = props.label ? <strong>{props.labelValue}:</strong> : '';
  const parser = new Parser();
  const text = props.data.value ?  parser.parse(props.data.value) : '';

  return (
    <Wrapper className="dataset-body" style={{ fontSize: '1.6rem' }}>
      {label} {text}
    </Wrapper>
  );
}

PageItemText.propTypes = {
  item: PropTypes.any,
};

export default PageItemText;
