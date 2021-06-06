import { useState } from "react";
import FoodDetail from "./components/UI/FoodDetail";
import Header from "./components/Layout/Header";
import Foods from "./components/Foods/Foods";
import Footer from "./components/Layout/Footer";
import CartProvider from "./store/CartProvider";
import WishlistProvider from "./store/WishlistProvider";

import "./App.css";
import Cart from "./components/UI/Cart";
import Wishlist from "./components/UI/Wishlist";

function App() {
  const [isShowFoodDetail, setIsShowFoodDetail] = useState(false);
  const [selectedFood, setSelectedFood] = useState({});
  const [isShowCart, setIsShowCart] = useState(false);
  const [isShowWishlist, setIsShowWishlist] = useState(false);

  const showFoodDetailHandler = () => {
    setIsShowFoodDetail(true);
  };

  const hideFoodDetailHandler = () => {
    setIsShowFoodDetail(false);
  };

  const showCartHandler = () => {
    setIsShowCart(true);
  };

  const hideCartHandler = () => {
    setIsShowCart(false);
  };

  const hideWishlistHandler = () => {
    setIsShowWishlist(false);
  };

  const showWishlistHandler = () => {
    setIsShowWishlist(true);
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="App">
          {isShowFoodDetail && (
            <FoodDetail
              onClose={hideFoodDetailHandler}
              selectedFood={selectedFood}
            />
          )}
          {isShowWishlist && <Wishlist onClose={hideWishlistHandler} />}
          {isShowCart && <Cart onClose={hideCartHandler} />}
          <Header
            onShowCart={showCartHandler}
            onShowWishlist={showWishlistHandler}
          />
          <main>
            <Foods
              onShowFoodDetail={showFoodDetailHandler}
              onSetSelectedFood={setSelectedFood}
            />
          </main>
          <Footer />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
