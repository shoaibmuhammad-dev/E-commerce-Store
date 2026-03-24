import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/products/${product?.title}`, { state: { product } });
  };
  return (
    <div
      className="relative w-full cursor-pointer overflow-hidden"
      onClick={handleNavigate}
    >
      <img
        src={product?.image}
        alt={product?.title}
        className="bg-[#ebebed] h-[280px] w-full object-contain"
      />
      <div className="w-full px-4 pt-1">
        <h1 className="text-base font-semibold tracking-wide">
          {product?.title}
        </h1>
        <p className="text-sm font-semibold text-gray-400 tracking-wide">
          <span className="line-through">${product?.discountedPrice}</span>{" "}
          <span className="text-black ml-1">${product?.price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
