import styled from 'styled-components';
import Quantity from './Quantity';
import TrashIcon from './Icon/TrashIcon';
import Button from './Button';

const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f8;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 10px;
`;

const ItemDetail = styled.div`
  font-weight: 600;
  font-size: 14px;
  .price {
    color: #ff6c44;
  }
`;

const ItemAction = styled.div`
  display: flex;

  .qty-container {
    margin-right: 10px;
  }
  svg {
    fill: #fff;
    width: 18px;
  }
`;

const CartItem = (props) => {
  const handleIncreaseQty = (props) => {
    if (props.qty < 10) {
      props.onIncreaseQty({
        id: props.id,
        name: props.name,
        price: props.price,
        qty: 1
      });
    }
  };

  const handleDecreaseQty = (props) => {
    if (props.qty > 1) {
      props.onDecreaseQty({
        id: props.id,
        name: props.name,
        price: props.price,
        qty: 1
      });
    } else {
      props.onRemoveFood(props.id);
    }
  };

  const handleRemoveCartItem = (props) => {
    props.onRemoveFood(props.id);
  }

  return (
    <StyledCartItem>
      <ItemDetail>
        <div className="name">
          {props.name}
        </div>
        <div className="price">
          Rp{props.price}
        </div>
      </ItemDetail>

      <ItemAction>
        <Quantity pad="10px" qty={props.qty} onIncreaseQty={() => handleIncreaseQty(props)} onDecreaseQty={() => handleDecreaseQty(props)}/>
        <Button onButtonClick={() => handleRemoveCartItem(props)} primary pad="4px 8px">
          <TrashIcon/>
        </Button>
      </ItemAction>
    </StyledCartItem>
  )
};

export default CartItem;