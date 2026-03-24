import React, { useEffect } from "react";
import CheckoutGrid from "../components/Checkout/CheckoutGrid";

const Checkout = () => {
  useEffect(() => {
    document.title = "Spartax - Checkout";
  }, []);
  return (
    <div>
      <CheckoutGrid />
    </div>
  );
};

export default Checkout;
