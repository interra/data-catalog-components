import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1em;
  position: relative;
  text-align: center;
  border: 1px solid #A4B9C6;
  margin-bottom: 32px;
  background: #fff;
  img {
    max-width: 120px;
  }
  a {
    text-decoration:none;
    color: ${props => props.theme.linkColor};
    &:hover {
      color: ${props => props.theme.linkHoverColor};
    }
  }
  img {
    max-width: 100%;
  }
`;

function PageItemOrg(props) {
  const name = props.data.value.name;
  const image = props.data.value.image ? <img alt={name} src={props.data.value.image} /> : <img alt='Orgnaization Image' src='https://s3.amazonaws.com/dkan-default-content-files/files/group.png' />;
  const description = props.data.value.description;
  const link = `/organization/${props.data.value.identifier}`;

  return (
    <Wrapper>
      <div className="org-image">{image}</div>
      <h3><a href={link}>{name}</a></h3>
      {description}
    </Wrapper>
  );
}

PageItemOrg.propTypes = {
  item: PropTypes.any,
  field: PropTypes.any,
};

export default PageItemOrg;
