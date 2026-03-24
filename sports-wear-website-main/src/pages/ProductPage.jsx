import React from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { styles } from "../styles/styles";

const ProductPage = () => {
  return (
    <div className={`w-full ${styles.paddingHorizontal} py-12`}>
      <ProductDetails />
    </div>
  );
};

export default ProductPage;
