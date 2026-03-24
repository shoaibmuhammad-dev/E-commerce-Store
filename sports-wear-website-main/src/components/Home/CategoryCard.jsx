import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const CategoryCard = ({ image, url, title }) => {
  return (
    <div
      className="h-[90vh] 2xl:h-[70vh] relative z-20 w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <Link
        to={url}
        className="px-6 py-2.5 rounded-full bg-gray-100 tracking-wide uppercase font-normal text-sm flex items-center gap-1 absolute lg:bottom-10 bottom-5 left-5 lg:left-10"
      >
        {title} <HiArrowLongRight className="text-base" />
      </Link>
    </div>
  );
};

export default CategoryCard;

// image size 1500 x 1200
