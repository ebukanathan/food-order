import CartContext from "./cart-content";

function CartProvider(prop) {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: {},
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {prop.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
