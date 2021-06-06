import { createContext } from 'react';

const CartContext = createContext({
  foods: [],
  totalAmount: 0,
  addFoods: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;