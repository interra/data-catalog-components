import styled from 'styled-components';

const fonts = {};

const navBarLink = fonts && fonts.navBarLink ? fonts.navBarLink : "#eaeaea";
const navBarLinkHover = fonts && fonts.navBarLinkHover ? fonts.navBarLinkHover : "#FFF";
const navBarLinkHoverBack = fonts && fonts.navBarLinkHoverBack ? fonts.navBarLinkHoverBack : "#3a71af";
const navBarLinkActiveHoverBack = fonts && fonts.navBarLinkActiveHoverBack ? fonts.navBarLinkActiveHoverBack : "#3a71af";

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
