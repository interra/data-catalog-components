import styled from "styled-components";

const Wrapper = styled.div`
  form {
      width: 100%;
  }
  table {
      width: 100%;
  }
  .btn-primary {
    float: right;
  }
  a.add-filter {
    cursor: pointer;
    color: ${props => props.theme.primary};
    &:hover,
    &:focus {
      color: ${props => props.theme.primaryDark};
      text-decoration: underline;
    }
  }
`;

export default Wrapper;