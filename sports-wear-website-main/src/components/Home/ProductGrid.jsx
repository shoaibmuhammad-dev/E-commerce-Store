import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import ProductCard from "../Global/ProductCard";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { LATEST_DROP_PRODUCTS } from "../../constants/theLatestDropProducts";

const ProductGrid = () => {
  return (
    <section
      className={`py-6 lg:py-12 ${styles.paddingHorizontal} flex flex-col gap-6`}
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">The Latest Drop</h1>
        <Link
          to="/shop-all"
          className="text-base uppercase font-medium text-orange-600 flex items-center gap-1 tracking-wide"
        >
          shop all <HiOutlineArrowLongRight />
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {LATEST_DROP_PRODUCTS?.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ProductGrid;
