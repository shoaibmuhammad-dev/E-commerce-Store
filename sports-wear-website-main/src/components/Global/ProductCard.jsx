import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/products/${product?.slug}`, { state: { product } });
  };
  return (
    <Link to={`/products/${product?.slug}`}>
      <div
        className="relative w-full cursor-pointer overflow-hidden"
        // onClick={handleNavigate}
      >
        <img
          src={product?.coverImage}
          alt={product?.title}
          className="bg-[#ebebed] h-[280px] w-full object-contain"
        />
        <div className="w-full pt-1">
          <h1 className="text-base font-semibold tracking-wide">
            {product?.title}
          </h1>
          <p className="text-sm font-semibold text-gray-400 tracking-wide">
            {Number(product?.discountPercentage) > 0 && (
              <span className="line-through mr-1">{`$${product?.price}`}</span>
            )}
            <span className="text-black">${product?.finalPrice}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
