import styled from "styled-components";
import Modal from "./Modal";
import WishlistContext from "../../store/wishlist-context";
import { useContext, useEffect, useState } from "react";
import WishListIcon from "./Icon/WishListIcon";

const StyledFoodDetail = styled.div`
  padding: 5px;

  h2 {
    color: #111a2c;
    font-weight: 600;
    margin: 20px 10px 10px 0;
  }
  .food-description {
    color: #525c67;
    font-size: 14px;
    text-align: justify;
  }
`;

const ImageContainer = styled.div`
  background-color: #f5f5f8;
  border-radius: 10px;
`;

const IMG = styled.img`
  display: block;
  margin: 0 auto;
  padding: 30px;
  max-width: 80%;
  -webkit-filter: drop-shadow(0px 18px 8px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(0px 18px 8px rgba(0, 0, 0, 0.1));
`;

const FoodDetail = (props) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { selectedFood } = props;
  const wishlistCtx = useContext(WishlistContext);

  const existingWishlist = wishlistCtx.foods.findIndex((food) => {
    return food.id === selectedFood.id;
  });

  const handleAddToWishlist = (props) => {
    const { selectedFood } = props;
    if (existingWishlist > -1) {
      wishlistCtx.removeFromWishlist(selectedFood.id)
    } else {
      wishlistCtx.addToWishlist({
        id: selectedFood.id,
        name: selectedFood.name,
        price: selectedFood.price,
      });
    }
  };

  return (
    <Modal
      onClose={props.onClose}
      title="DETAILS"
      additionalBtn={<WishListIcon/>}
      isWishlisted={existingWishlist > -1 ? true : false}
      additionalBtnAction={() => handleAddToWishlist(props)}
      additionalBtnPad="8px 10px"
    >
      <StyledFoodDetail>
        <ImageContainer>
          <IMG src={selectedFood.img} alt="" />
        </ImageContainer>
        <h2 className="food-title">{selectedFood.name}</h2>
        <div className="food-description">{selectedFood.description}</div>
      </StyledFoodDetail>
    </Modal>
  );
};

export default FoodDetail;
