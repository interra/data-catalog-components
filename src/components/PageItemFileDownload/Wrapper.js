import styled from "styled-components";
import '../../theme/dkan-flaticon.css';

const Wrapper = styled.div`
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
  .format-label[data-format=csv]:before {
    content: "f6dd";
    color: #dfb100;
    font-family: "FontAwesome";
  }
`;

export default Wrapper;

