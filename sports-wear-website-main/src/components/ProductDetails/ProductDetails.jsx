import React, { useEffect } from "react";
import ProductCard from "../Global/ProductCard";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { title } = useParams();

  useEffect(() => {
    document.title = `Spartax - ${title}`;
  }, []);

  return (
    <div className="w-full py-12 px-4 lg:p-20 bg-white">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full h-[280px] lg:h-[540px] bg-gray-100 flex items-center justify-center">
          <img
            src={location?.state?.product?.image}
            alt="product-image"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="font-light text-gray-500 text-[15px] tracking-wider">
            Home /{" "}
            {location?.state?.product?.category == "men"
              ? "Men"
              : location?.state?.product?.category == "women"
                ? "Women"
                : location?.state?.product?.category == "shoes"
                  ? "Shoes"
                  : "Packs & Gear"}{" "}
            / {title}
          </p>
          <p className="font-light text-gray-500 text-[15px] tracking-wider">
            {location?.state?.product?.category === "men"
              ? "Men"
              : location?.state?.product?.category === "women"
                ? "Women"
                : location?.state?.product?.category === "shoes"
                  ? "Shoes"
                  : "Packs $ Gear"}
          </p>
          <h2 className="font-medium text-[24px] tracking-wider">
            {location?.state?.product?.title}
          </h2>
          <p className="font-medium text-[24px] tracking-wider">
            ${location?.state?.product?.price}
          </p>
          <p className="font-light text-gray-500 text-[16px] tracking-wider">
            Id eget magna velit lectus dui est, pellentesque dignissim
            sollicitudin accumsan in maecenas vitae dignissim bibendum feugiat
            purus morbi dui rhoncus elementum odio amet.
          </p>
          <div className="w-full flex items-center gap-4">
            <div className="flex items-center">
              <button className="text-xl font-light text-gray-500 w-9 h-9 border flex items-center justify-center">
                -
              </button>
              <div className="w-9 h-9 border flex items-center justify-center">
                <span className="text-sm text-gray-500">1</span>
              </div>
              <button className="text-xl font-light text-gray-500 w-9 h-9 border flex items-center justify-center">
                +
              </button>
            </div>

            <button className="bg-orange-600 text-white px-7 md:px-16 py-2 rounded-full text-sm tracking-wider uppercase">
              Add To Cart
            </button>
          </div>
          <div className="w-full border" />
          <div className="flex items-center flex-wrap gap-6">
            <span className="font-light text-gray-500 text-[15px] tracking-wider">
              Category:{" "}
              {location?.state?.product?.category === "men"
                ? "Men"
                : location?.state?.product?.category === "women"
                  ? "Women"
                  : location?.state?.product?.category === "shoes"
                    ? "Shoes"
                    : ""}
            </span>
            <span className="font-light text-gray-500 text-[15px] tracking-wider">
              Tags: backpack, hiking, women, men
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-600 text-[16px] tracking-wider">
              Guaranteed Safe Checkout
            </p>
            <div className="border py-4 px-6 rounded mt-4 flex items-center gap-4">
              <img
                src="/Visa-Card-Payment-PNG.png"
                alt="Visa-Card-Payment-PNG"
                className="w-10"
              />
              <img
                src="/maser-card.png"
                alt="Visa-Card-Payment-PNG"
                className="w-10"
              />
              <img
                src="/atm-card.png"
                alt="Visa-Card-Payment-PNG"
                className="w-10"
              />
              <img
                src="/paypal.png"
                alt="Visa-Card-Payment-PNG"
                className="w-14 bg-gray-100 h-6 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t mt-10 pt-6 flex flex-col items-start gap-4">
        <h3 className="font-medium text-[18px] tracking-wider">Description</h3>
        <p className="font-light text-gray-500 text-[16px] tracking-wider">
          Adipiscing nisi, lectus sit pharetra nunc, sit mi egestas sit velit
          tristique quisque et amet odio donec mauris integer imperdiet arcu
          orci, dignissim id duis dictum malesuada nunc, tempor felis.
        </p>
        <p className="font-light text-gray-500 text-[16px] tracking-wider">
          Arcu vitae commodo in morbi tortor, id odio ullamcorper elit cras
          tempus libero ac, duis lorem rhoncus, purus ultrices tempor, egestas
          dignissim arcu, nunc ullamcorper massa ultrices gravida in orci eu
          pulvinar viverra egestas egestas feugiat sit ultricies eu faucibus
          facilisis nibh dui mauris ornare lacus sapien a duis ut tempor,
          aliquam arcu, facilisi cras sed integer mauris sem integer cursus
          consequat aliquet turpis.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
