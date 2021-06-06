import { useReducer } from "react";
import WishlistContext from "./wishlist-context";

const initialWishlistState = {
  foods: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
};

const wishlistReducer = (state, action) => {
  let updatedFoods, foodIndex;

  switch (action.type) {
    case "ADD":
      foodIndex = state.foods.findIndex((food) => {
        return food.id === action.item.id;
      });
      updatedFoods = [...state.foods];

      if (foodIndex === -1) {
        updatedFoods = [...state.foods, action.item];
      }
      return { foods: updatedFoods };

    case "REMOVE":
      foodIndex = state.foods.findIndex((food) => {
        return food.id === action.id;
      });

      if (foodIndex > -1) {
        updatedFoods = [...state.foods];
        updatedFoods.splice(foodIndex, 1);
      } else {
        throw new Error();
      }
      return { foods: updatedFoods };

    default:
      throw new Error();
  }
};

const WishlistProvider = (props) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialWishlistState);

  const handleAddToWishlist = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const wishlistCtx = {
    foods: state.foods,
    addToWishlist: handleAddToWishlist,
    removeFromWishlist: handleRemoveFromWishlist,
  };

  return (
    <WishlistContext.Provider value={wishlistCtx}>
      {props.children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
