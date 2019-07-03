import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding: 0 30px 0 30px;

  h1 {
    position: relative;
    padding-bottom: 15px;
    font-size: 40px;
    line-height: 46px;
    &::after {
      content: '';
      width: 50px;
      height: 5px;
      background-color: ${props => props.theme.secondaryDark};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  
`;

export default Wrapper;
