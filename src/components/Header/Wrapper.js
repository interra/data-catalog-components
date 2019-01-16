import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: stretch;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

  .site-name {
    margin-bottom: 10px;
    a {
     color: ${props => props.theme.headingColor};
     font-size: 2.4rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export default Wrapper;
