import { createContext } from "react";

const WishlistContext = createContext({
  foods: [
    {
      id: 1,
      name: "Ayam Bakar",
      price: 18000,
    },
  ],
  addToWishlist: (item) => {},
  removeFromWishlist: (id) => {},
});

export default WishlistContext;
