import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: []
  //totalQuantity: 0
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Calcular la cantidad total y actualizar totalQuantity
    const calculateTotalQuantity = () => {
      const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setTotalQuantity(totalQuantity);
    };

    calculateTotalQuantity();
  }, [cart]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      // Actualizar la cantidad del producto en el carrito
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCart(updatedCart);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((item) => item.id !== itemId);

    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
