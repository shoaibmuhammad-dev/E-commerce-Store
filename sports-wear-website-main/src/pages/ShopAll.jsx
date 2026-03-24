import React, { useEffect } from "react";
import Products from "../components/ShopAll/Products";

const ShopAll = () => {
  useEffect(() => {
    document.title = "Spartax - Shop All";
  }, []);
  return (
    <div>
      <Products />
    </div>
  );
};

export default ShopAll;
