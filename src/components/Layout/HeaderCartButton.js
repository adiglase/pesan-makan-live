import { useContext, useEffect, useState } from "react";
import HeaderButton from "../UI/HeaderButton";
import CartIcon from "../UI/Icon/CartIcon";
import StatsNumber from "../UI/StatsNumber";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [isButtonBumping, setIsButtonBumping] = useState(false);
  const cartCtx = useContext(CartContext);

  const { foods } = cartCtx;
  const cartTotal = foods.reduce((accumulator, currentValue) => {
    return currentValue.qty + accumulator;
  }, 0);

  let buttonClass = isButtonBumping ? "bump" : "";

  useEffect(() => {
    setIsButtonBumping(true);

    const timer = setTimeout(() => {
      setIsButtonBumping(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [foods, cartTotal]);

  return (
    <HeaderButton
      buttonClass={buttonClass}
      onHeaderButtonClick={props.onShowCart}
    >
      <CartIcon />
      <StatsNumber number={cartTotal} />
    </HeaderButton>
  );
};

export default HeaderCartButton;
