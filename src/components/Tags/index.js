import React from 'react';
import styled from "styled-components";

function Tags(props) {
  const Wrapper = styled.div`
    margin: 20px 0;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    .tag {
      margin: 5px;
      a {
        border: 1px solid ${props => props.theme.borderColor};
        border-radius: 15px;
        background-color: ${props => props.theme.grayDust};
        color: ${props => props.theme.grayDark};
        padding: 4px 10px;
        position: relative;

        &:hover {
          background: #fff;
          color: #000;
          text-decoration: none;
        }
      }
    }
  `;

  const label = props.label ? <strong>{props.label}:</strong> : '';

  const tags = props.tags.map((tag) => {
    const ref = `{${props.path}${tag.title}`;
    return (
      <div className="tag" key={tag.identifier}>
        <a href={ref}> {tag.title} </a>
      </div>
    );
  }, '<div></div>');

  return (
    <Wrapper className="tag-wrapper">
      {label} {tags}
    </Wrapper>
  );
}

export default Tags;
