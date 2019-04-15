import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
  padding: 40px 0;
  display: flex;
  align-items: flex-start;
  align-content: stretch;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;

  .hero-title {
    color: white;
  }
  .block {
    background-color:rgba(0,0,0,0.4);
    border-radius: 4px;
    position: relative;
    margin: auto;
    color: white;
    padding: 20px;
    min-width: 30%;
    max-width: 50%;
    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    letter-spacing: 0.5px;
    &.center {
      text-align: center;
    }
  }
  h1,
  h2 {
    margin-top: 0;
  }
  .btn-hero a {
    color: ${props => props.theme.primaryDark};
    &:hover,
    &:focus {
      color: ${props => props.theme.primaryDark};
      text-decoration: none;
    }
  }
  .tint {
    background: linear-gradient(0deg,rgba(10,118,188,1) 14%,rgba(22,46,81,1) 100%);
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 0;
    opacity: .6;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export default Wrapper;
