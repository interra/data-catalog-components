import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1em;
  position: relative;
  text-align: center;
  border: 1px solid #A4B9C6;
  margin-bottom: 32px;
  background: #fff;
  img {
    max-width: 120px;
  }
  a {
    text-decoration:none;
    color: ${props => props.theme.linkColor}
  }
  strong {
    display: block;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export default Wrapper;
