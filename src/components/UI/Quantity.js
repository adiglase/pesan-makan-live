import styled from "styled-components";

import Button from "./Button";
import Input from "./Input";

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 2px;
  border-radius: 10px;
  height: 100%;
`;

const Quantity = (props) => {
  return (
    <BtnContainer className="qty-container">
      <Button onButtonClick={props.onDecreaseQty} bold qtyAction pad={props.pad ? props.pad : "5px"}>
        -
      </Button>
      <Input att={{ type: "text", value: props.qty, disabled: "1" }} qtyInput />
      <Button onButtonClick={props.onIncreaseQty} bold qtyAction pad={props.pad ? props.pad : "5px"}>
        +
      </Button>
    </BtnContainer>
  );
};

export default Quantity;
