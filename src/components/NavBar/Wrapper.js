import styled from 'styled-components';

const navBarBackColor = "#030d17";

export default styled.div`
  background-color: ${props => props.theme.navBarBackgroundColor};
  background-image: ${props => props.theme.navBarBackgroundImage};
  position:relative;
  display: block;
  clear: both;
  z-index: 1;
  &:after{
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background: rgba(0,0,0,0.2);
  }
`;
