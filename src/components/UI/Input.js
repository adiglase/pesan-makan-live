import styled from 'styled-components';

const StyledInput = styled.input`
  font-family: Poppins, sans-serif;
  
  ${(props) => {
    if (props.qtyInput) {
      return `
        border: none;
        width: 30px;
        text-align: center;
        background-color: transparent;
        font-weight: 600;  
      `;
    }
  }}
`;

const Input = (props) => {
  return (
    <StyledInput {...props.att} qtyInput={props.qtyInput}/>
  );
};

export default Input;