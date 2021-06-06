import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || '0px'};
  font-family: Poppins, sans-serif;
  border: none;
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  padding: ${({pad}) => pad ? pad : '10px 15px' };
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.05);
  }
  
  background-color: ${(props) => {
    if (props.primary) {
      return '#ff6c44';
    } else if (props.foodItemAction || props.qtyAction) {
      return 'transparent';
    }
  }};

  color: ${(props) => {
    if (props.primary) {
      return '#fff';
    }
  }};

  font-size: ${(props) => props.fontSize || '12px'};
`;

const handleButtonClick = (e, onButtonClick) => {
  onButtonClick();
  e.stopPropagation();
}

const Button = (props) => {
  return (
    <StyledButton onClick={(e) => handleButtonClick(e, props.onButtonClick)}
      primary={props.primary}
      bold={props.bold}
      foodItemAction={props.foodItemAction}
      qtyAction={props.qtyAction}
      fontSize={props.fontSize}
      pad={props.pad}
      margin={props.margin}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
