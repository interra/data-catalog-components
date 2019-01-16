import styled from 'styled-components';

const navBarLink = "#eaeaea";
const navBarLinkHover = "#FFF";
const navBarLinkHoverBack = "#3a71af";
const navBarLinkActive = "#FFF";
const navBarLinkActiveBack = "#305e92";
const navBarLinkActiveHoverBack = "#3a71af";
const navBarLinkActiveHover = "#FFF";

export default styled.a`
  display: inline-flex;
  padding: .9em 1.2em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: ${navBarLink};
  transition: all 0.2s linear;

  &:hover.active {
    background-color: none !important;
    box-shadow: inset 0 -4px 0 ${navBarLinkActiveHoverBack};
    color: ${navBarLink};
  }
  &:hover {
    color: ${navBarLinkHover};
    text-decoration: none;
    background-color: ${navBarLinkHoverBack};
  }
  &.active {
    background-color: none !important;
    box-shadow: inset 0 -4px 0 ${navBarLinkActiveHoverBack};
    text-decoration: none;
    color: ${navBarLink};
  }
`;