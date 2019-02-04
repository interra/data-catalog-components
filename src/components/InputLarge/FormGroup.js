import styled from 'styled-components';

const FormGroup = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  border-collapse: separate;
  .form-text.form-control {
    display: inline-block;
    margin-top: 0;
    width: 70%;
    height: 34px;
    font-weight: 300;
  }
  .input-group-btn {
    display: inline-block;
    button {
      display: inline-block;
    }
  }
`;

export default FormGroup;
