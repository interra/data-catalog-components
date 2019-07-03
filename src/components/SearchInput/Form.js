import styled from "styled-components";

export default styled.form`
  .form-group {
    padding-right: 125px;
    position: relative;
  }
  input[type="text"] {
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    height: auto;
    width: 100%;
  }
  button {
    position: absolute;
  }
  button[type="reset"] {
    color: #333333;
    top: 10px;
    right: 140px;
    background: transparent;
    border: none;
    &:active,
    &:focus {
      background: transparent;
      border: none;
      box-shadow: none;
    }
  }
  button[type="submit"] {
    top: 0;
    right: 0;
    background-color: ${props => props.theme.primary};
    border-radius: 24px;
    border-style: none;
    font-size: 1.8rem;
    font-weight: bold;
    display: inline-block;
    height: 48px;
    margin: 0;
    padding: 10px 0;
    color: #FFFFFF;
    width: 100px;
    svg {
      padding-top: 3px;
      vertical-align: top;
      path {
        fill: #ffffff;
      }
    }
    &:hover {
      background-color: ${props => props.theme.primaryDark};
    }
  }

  @media screen and (max-width: 768px) {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    border-left: none;
    padding-left: 0;
    input.form-control {
      width: 100%;
    }
  }
`;
