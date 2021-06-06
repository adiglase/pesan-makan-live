import Modal from "./Modal";
import styled from "styled-components";
import { useContext } from "react";
import WishlistContext from "../../store/wishlist-context";
import WishlistItem from "./WishlistItem";

const StyledWishlist = styled.div``;

const StyledAlert = styled.p`
  text-align: center;
  font-size: 14px;
`;

const Wishlist = (props) => {
  const wishlistCtx = useContext(WishlistContext);
  const wishlistList = wishlistCtx.foods.map((item) => {
    return (
      <WishlistItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        onRemoveFromWishlist={wishlistCtx.removeFromWishlist}
      />
    );
  });

  return (
    <Modal onClose={props.onClose} title="WISHLIST">
      {wishlistList.length ? (
        <StyledWishlist>{wishlistList}</StyledWishlist>
      ) : (
        <StyledAlert>Your wishlist is empty</StyledAlert>
      )}
    </Modal>
  );
};

export default Wishlist;
