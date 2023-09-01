import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay Articulos en el carrito</h1>
        <Link to="/" className="option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div id="CartContainer">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3 id="CartTotal">Total: ${total}</h3>
      <div id="CartButtons">
        <button onClick={() => clearCart()} className="CartButton">
          Limpiar Carrito
        </button>
        <Link to="/checkout" className="option CartButton">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
