import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.footerColor};
  color: ${props => props.theme.footerText};
  padding: 40px 0;
  display: flex;
  align-items: flex-start;
  align-content: stretch;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  a {
    color: ${props => props.theme.footerLink};
  }
  ul {
    list-style-type:none;
    float: left;
    list-style: none;
    margin: 0 40px 0 0;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export default Wrapper;
