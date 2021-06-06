import { useState, useContext } from "react";
import styled from "styled-components";
import CartContext from "../../../store/cart-context";

import Button from "../../UI/Button";
import DisplayImage from "../../UI/DisplayImage";
import Quantity from "../../UI/Quantity";

const Item = styled.div`
  cursor: pointer;
  font-family: Poppins, sans-serif;
  display: flex;
  align-items: center;
  background-color: #f5f5f8;
  border-radius: 10px;
  padding: 12px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.04);
  }

  .display-img {
    flex: 1 0 0;
  }

  .detail {
    flex: 2 0 0;
    padding-right: 10px;
    font-size: 14px;
    font-weight: 600;
    .price {
      color: #ff6c44;
    }
  }

  .action {
    flex: 0 0 86px;
    display: flex;
    flex-direction: column;
  }
`;

const FoodItem = (props) => {
  const [qty, setQty] = useState(0);
  const cartCtx = useContext(CartContext);
  const price = `Rp${props.price}`;

  const handleIncreaseQty = () => {
    if (qty < 10) {
      setQty((prevQty) => prevQty + 1);
    }
  };

  const handleDecreaseQty = () => {
    if (qty > 0) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  const handleAddToCart = (props) => {
    if (qty > 0) {
      cartCtx.addFoods({
        id: props.id,
        name: props.name,
        price: props.price,
        qty: qty
      });

      setQty(0);
    }
  };

  return (
    <Item onClick={() => props.onSelectFood(props.id)}>
      <DisplayImage className="display-img">
        <img src={props.thumb} alt={props.name} />
      </DisplayImage>
      <div className="detail">
        <div className="name">{props.name}</div>
        <div className="price">{price}</div>
      </div>
      <div className="action">
        <Quantity
          qty={qty}
          onIncreaseQty={handleIncreaseQty}
          onDecreaseQty={handleDecreaseQty}
        />
        <Button
          primary
          foodItemAction
          pad="8px"
          margin="10px 0 0 0"
          onButtonClick={() => handleAddToCart(props)}
        >
          Add to Cart
        </Button>
      </div>
    </Item>
  );
};

export default FoodItem;
