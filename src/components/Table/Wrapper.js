import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2rem 0;
  .table-striped,
  .table-hover {
    > tbody tr:nth-of-type(odd):hover,
    > tbody tr:nth-of-type(even):hover {
      background-color: #FFFEEE;
    }
  }
  table {
    border-color: ${props => props.theme.borderColor}
    margin: 1rem 0;
  }
`;

export default Wrapper;
