import React from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [isshowcart, setIsshowcart] = useState(false);

  const showCart = () => {
    setIsshowcart((prev) => !prev);
  };

  const hideCart = () => {
    setIsshowcart(false);
  };

  return (
    <CartProvider>
      {isshowcart && <Cart onClose={showCart} />}
      <Header onShowcart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
