import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.footerBackgroundColor};
  color: ${props => props.theme.footerText};
  padding: 40px 0;
  .container {
    display: flex;
    align-items: flex-start;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
  h2, h3, h4 {
    color: ${props => props.theme.footerText};
  }
  a {
    color: ${props => props.theme.footerLink};
    text-decoration: underline;
    &:hover,
    &:focus {
      color: ${props => props.theme.footerLinkHover};
    }
  }
  ul {
    list-style-type:none;
    float: left;
    list-style: none;
    margin: 0 40px 0 0;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    .container {
      flex-wrap: wrap;
    }
    .copyright {
      margin-top: 30px;
    }
  }
`;

export default Wrapper;
