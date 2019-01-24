import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  padding: 16px 48px;
  a {
    color: ${props => props.theme.headingColor};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.headingColor};
      text-decoration: underline;
    }
  }
  h2 {
    margin: 8px 0;
  }
  .item-theme {
    border-bottom: 1px solid ${props => props.theme.grayLight};
    color: ${props => props.theme.grayMedium};
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.25px;
    margin: 1em 0;
    padding-bottom: 0.75em;
  }
  .format-types {
    display: flex;
    align-items: flex-start;
    align-content: stretch;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 0.9em;
  }
  .label {
    border-radius: 3px;
    color: white;

    font-weight: 500;
    line-height: 1.6rem;
    white-space: nowrap;
    display: inline-block;
    padding: 4px 8px;
    margin: 0.75em 16px 0.75em 0;
    &:first-of-type {
      margin-left: 0;
    }
  }
  .label[data-format="csv"] {
    background: #dfb100;
  }
  .label[data-format="json"] {
    background: #ef7100;
  }
  .label[data-format="pdf"] {
    background: #e0051e;
  }
`;

export default Wrapper;
