import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const ProductGallery = ({ product }) => {
  const images = product?.images || [];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  if (!images.length) return null;

  return (
    <div className="w-full max-w-xl">
      {/* Main Image */}
      <div className="relative w-full h-100 overflow-hidden border-radius bg-gray-100">
        <img
          src={images[activeIndex]}
          alt="product"
          className="w-full h-full object-contain"
        />

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 outline-none"
        >
          <IoChevronBack size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 outline-none"
        >
          <IoChevronForward size={20} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 flex-wrap">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-16 h-16 border-radius overflow-hidden border-2 transition
              ${activeIndex === index ? "border-black" : "border-transparent"}`}
          >
            <img
              src={img}
              alt="thumbnail"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
