import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">Cart ({cart.length})</Link> |{" "}
      <Link to="/checkout">Checkout</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
