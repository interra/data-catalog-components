import styled from "styled-components";

const Wrapper = styled.form`
  width: 100%;
  margin: 2rem 0;
  padding: 10px;
  border: 1px solid ${props => props.theme.grayLight};
  table {
      width: 100%;
  }
  .close {
    padding: 0;
  }
  select,
  input {
    font-weight: 100;
  }
  a.add-filter,
  a.add-filter:not([href]):not([tabindex]) {
    cursor: pointer;
    margin: 1rem 0;
    display: inline-block;
    color: ${props => props.theme.primary};
    &:hover,
    &:focus {
      color: ${props => props.theme.primaryDark};
      text-decoration: underline;
    }
  }
  .options {
    .form-check {
      display: inline;
      padding: 0 2rem;
      input {
        margin: 3px 0 0 -20px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .options {
      float: right;
    }
  }
`;

export default Wrapper;