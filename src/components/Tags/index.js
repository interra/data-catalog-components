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
        padding: 2px 10px 2px;
        line-height: 2.0rem;
        border-radius: 0 5px 5px 0;
        background-color: #F3F3F3;
        margin: 3px 5px 3px 20px;
        position: relative;
        color: #333333;
        border: 1px solid #ddd;
        border-left: 0;
        z-index: 2;
        transition: 0;
        &:before {
          content: "";
          width: 2px;
          height: 2px;
          background: #777777;
          position: absolute;
          top: 11px;
          left: -5px;
          border-radius: 0;
        }
        &:after {
          content: "";
          width: 20px;
          height: 20px;
          background-color: #F3F3F3;
          transform: rotate(45deg);
          border-radius: 2px;
          position: absolute;
          top: 2px;
          left: -9px;
          z-index: -1;
          border: 1px solid #ddd;
          border-top: none;
          border-right: none;
          transition: 0;
        }
        &:hover {
          background: #fff;
          color: #000;
          text-decoration: none;
          transition: 0;
        }
        &:hover:after {
          background: #fff;
          color: #000;
          text-decoration: none;
          transition: 0;
        }
      }
    }
  `;

  const label = props.label ? <strong>{props.label}:</strong> : '';
  const tags = props.tags.map((tag) => {

    return (
      <div className="tag" key={tag.identifier}>
        <a href={tag.identifier}> {tag.title} </a>
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
