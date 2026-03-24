import React, { useEffect } from "react";
import CartProducts from "../components/Cart/CartProducts";

const Cart = () => {
  useEffect(() => {
    document.title = "Spartax - Cart";
  }, []);
  return (
    <div>
      <CartProducts />
    </div>
  );
};

export default Cart;
