import styled from 'styled-components'

const StyledLink = styled.a`
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 8px;
  margin-bottom: 20px;
  width: 210px;
  box-shadow: 0 0 4px 2px #f3f3f3;
  background-color: white;
  position: relative;
  display: block;
  color: ${props => props.theme.linkColor};
  font-size: 1.15em;
  padding: 1em 2em;
  transition: all 0.1s linear;
  text-decoration: none;
  text-align: center;
  &.active,
  &:hover {
    background-color: ${props => props.theme.accentLight};
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1) !important;
    text-decoration: none;
    transform: translateY(-3px);
  }
  img {
    max-width: 150px;
    max-height: 100px;
    margin-bottom: 10px;
  }
`

export default StyledLink
