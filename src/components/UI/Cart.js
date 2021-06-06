import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styled from "styled-components";
import Modal from "./Modal";
import CartItem from "./CartItem";
import ListDetail from "./ListDetail";

const StyledCart = styled.div``;

const StyledAlert = styled.p`
  text-align: center;
  font-size: 14px;
`;

const StyledTotal = styled.div`
  margin-top: 40px;
`;

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartList = cartCtx.foods.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        qty={item.qty}
        onIncreaseQty={cartCtx.addFoods}
        onDecreaseQty={cartCtx.decreaseQty}
        onRemoveFood={cartCtx.removeFood}
      />
    );
  });

  return (
    <Modal onClose={props.onClose} title="CART">
      {cartList.length ? (
        <StyledCart>{cartList}</StyledCart>
      ) : (
        <StyledAlert>Your cart is empty</StyledAlert>
      )}
      <StyledTotal>
        <ListDetail bold point="Total:" value={'Rp' + cartCtx.totalAmount} />
      </StyledTotal>
    </Modal>
  );
};

export default Cart;
