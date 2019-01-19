import styled from 'styled-components';

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
  font-weight: 500;
  color: ${props => props.theme.navBarLink};
  transition: all 0.2s linear;

  &:hover {
    color: ${props => props.theme.navBarLink};
    text-decoration: none;
    background-color: ${props => props.theme.navBarLinkHoverBack};
  }
  &.active {
    background-color: none !important;
    box-shadow: inset 0 -4px 0 ${props => props.theme.navBarLinkActiveHoverBack};
    text-decoration: none;
    color: ${props => props.theme.navBarLink};
  }
  &:hover.active,
  &:focus.active {
    background-color: none !important;
    box-shadow: inset 0 -4px 0 ${props => props.theme.navBarLinkActiveHoverBack};
    color: ${props => props.theme.navBarLink};
  }
`;
