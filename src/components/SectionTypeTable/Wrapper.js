import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 1em 0;
  position: relative;
  .dataset-information {
    clear: both;
    padding: 5px 0;
  }
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: ${props => props.theme.grayDust};
  }
  font-size: 1.6rem;
`;

export default Wrapper;
