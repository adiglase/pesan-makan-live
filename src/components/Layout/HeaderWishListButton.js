import { useContext, useState, useEffect } from "react";
import HeaderButton from "../UI/HeaderButton";
import WishListIcon from "../UI/Icon/WishListIcon";
import StatsNumber from "../UI/StatsNumber";
import WishlistContext from "../../store/wishlist-context";

const HeaderWishListButton = (props) => {
  const [isButtonBumping, setIsButtonBumping] = useState(false);
  const wishlistCtx = useContext(WishlistContext);
  const totalWishlist = wishlistCtx.foods.length;

  let buttonClass = isButtonBumping ? "bump" : "";

  useEffect(() => {
    setIsButtonBumping(true);

    const timer = setTimeout(() => {
      setIsButtonBumping(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [totalWishlist]);

  return (
    <HeaderButton
      buttonClass={buttonClass}
      onHeaderButtonClick={props.onShowWishlist}
    >
      <WishListIcon />
      <StatsNumber number={totalWishlist} />
    </HeaderButton>
  );
};

export default HeaderWishListButton;
