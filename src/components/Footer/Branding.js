import styled from 'styled-components';

const Branding = styled.div`
  flex-grow: 1.5;
  max-width: 560px;
  h3 {
    font-weight: 500;
    font-size: 30px;
    margin: 20px 0 5px;
  }
  img {
    width: 90px;
    float: left;
    margin-right: 20px !important;
    opacity: .3;
  }
  p {
    margin: 0 2em 1em 0;
  }
  .social {
    margin: 0 0 1em 110px;
    i {
      font-size: 25px;
      opacity: .3;
      margin: 0 1em 1em 0;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default Branding;
