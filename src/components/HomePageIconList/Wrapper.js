import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  h2 {
    display: block;
    font-size: 20px !important;
    letter-spacing: 7px;
    margin-bottom: 24px;
    text-align: center;
  }
  li {
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: 1200px) {
    li {
      max-width: 25%;
    }
  }
`;

export default Wrapper;
