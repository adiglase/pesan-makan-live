import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
  foods: [],
  totalAmount: 0,
  addFoods: () => {},
  decreaseQty: () => {},
  removeFood: () => {}  
};

const cartReducer = (state, action) => {
  let foodToUpdate, totalAmountToUpdate, foodIndex, foodToRemove;

  switch (action.type) {
    case "ADD":
      totalAmountToUpdate = state.totalAmount + action.item.qty * action.item.price;

      const existingFoodIndex = state.foods.findIndex((food) => {
        return food.id === action.item.id;
      });

      if (existingFoodIndex > -1) {
        const existingFood = state.foods[existingFoodIndex];

        const updatedFood = {
          ...existingFood,
          qty: existingFood.qty + action.item.qty,
        };

        foodToUpdate = [...state.foods];
        foodToUpdate[existingFoodIndex] = updatedFood;
      } else {
        foodToUpdate = [...state.foods, action.item];
      }

      return { foods: foodToUpdate, totalAmount: totalAmountToUpdate };

    case "DECREASE":
      totalAmountToUpdate = state.totalAmount - action.item.qty * action.item.price;

      foodIndex = state.foods.findIndex((food) => {
        return food.id === action.item.id;
      });

      if (foodIndex > -1) {
        const existingFood = state.foods[foodIndex];

        const updatedFood = {
          ...existingFood,
          qty: existingFood.qty - 1,
        };
        foodToUpdate = [...state.foods];
        foodToUpdate[foodIndex] = updatedFood;
      } else {
        throw new Error();
      }

      return { foods: foodToUpdate, totalAmount: totalAmountToUpdate };

    case "REMOVE":    
      foodIndex = state.foods.findIndex((food) => {
        return food.id === action.id;
      });

      if (foodIndex > -1) {
        foodToUpdate = [...state.foods];

        foodToRemove = foodToUpdate[foodIndex];
        totalAmountToUpdate = state.totalAmount - foodToRemove.qty * foodToRemove.price;
        
        foodToUpdate.splice(foodIndex, 1);
      } else {
        throw new Error();
      }

      return { foods: foodToUpdate, totalAmount: totalAmountToUpdate };

    default:
      throw new Error();
  }
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const handleAddFoods = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const handleDecreaseQty = (item) => {
    dispatch({ type: "DECREASE", item: item });
  };

  const handleRemoveFood = (id) => {
    dispatch({ type: "REMOVE", id: id})
  }

  const cartCtx = {
    foods: state.foods,
    totalAmount: state.totalAmount,
    addFoods: handleAddFoods,
    decreaseQty: handleDecreaseQty,
    removeFood: handleRemoveFood,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
