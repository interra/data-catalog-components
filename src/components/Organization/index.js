import React from 'react';
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

function Organization(props) {
  const {name, description, identifier} = props
  const image = props.image ? <img alt={name} src={props.image} /> : <img alt='Orgnaization Image' src='https://s3.amazonaws.com/dkan-default-content-files/files/group.png' />;

  const link = `/organization/${identifier}`;

  return (
    <Wrapper>
      <div className="org-image">{image}</div>
      <h3><a href={link}>{name}</a></h3>
      {description}
    </Wrapper>
  );
}

export default Organization;