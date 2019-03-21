import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  h2 {
    display: block;
    font-size: 2rem !important;
    letter-spacing: 7px;
    margin-bottom: 24px;
    text-align: center;
    text-transform: uppercase;
  }
  ul {
    list-style:none;
    display: flex;
    align-items: stretch;
    align-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
  li {
    display: flex;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    a {
      width: 100%;
      flex: 1 0 auto;
    }
  }

  @media all and (min-width: 1200px) {
    li {
      width: 33.33%;
    }
  }
  @media all and (min-width: 769px) and (max-width : 1199px) {
    li {
      width: 50%;
    }
  }
`;

export default Wrapper;
