import styled from "styled-components";

const Wrapper = styled.div`
  a {
    color: ${props => props.theme.linkColor};
    line-height: 50px;
    padding-left: 5px;
    &:hover {
      color: ${props => props.theme.linkHoverColor};
    }
  }
  .format-label {
    color: transparent;
    font-weight: normal;
    height: 50px;
    left: 0;
    position: absolute;
    text-decoration: none;
    top: 0;
    width: 35px;
    z-index: 0;
  }
`;

export default Wrapper;

