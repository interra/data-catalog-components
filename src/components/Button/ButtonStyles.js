import { css } from "styled-components";

const ButtonStyles = css`
  background-color: ${props => props.theme.primary};
  border: none;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 1rem;
  padding: 10px 40px 8px;
  text-align: center;
  text-decoration: none;
  text-shadow: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.primaryDark};
  }

  &.btn-hero {
    background-color: ${props => props.theme.secondary};
    border: none;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.primaryDark};
    text-transform: uppercase;
    &:hover,
    &:focus {
      background: white;
      transform: translateY(-3px);
      box-shadow: 0 7px 15px rgba(0, 0, 0, 0.5);
    }
  }

  &.close {
    background-color: transparent;
    color: #000;
    padding: 10px;
  }
`;

export default ButtonStyles;
