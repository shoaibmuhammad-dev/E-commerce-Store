import { Link } from "react-router-dom";

const ProductInfo = ({ product }) => {
  return (
    <div className="w-full bg-white">
      <div className="w-full">
        <div className="flex flex-col items-start gap-3">
          <p className="font-light text-gray-600 text-[15px]">
            <Link to={"/products"}>Products</Link> / {product?.title}
          </p>

          <h2 className="font-medium text-[22px]">{product?.title}</h2>
          <p className="font-medium text-[20px]">
            Price: <span className="text-gray-600">${product?.price}</span>
          </p>
          <p className="font-light text-gray-600 text-[16px] leading-[1.3]">
            {product?.shortDescription}
          </p>
        </div>
      </div>

      <div className="w-full border border-gray-200 my-5" />

      <div className="w-full grid grid-cols-2">
        <span className="font-light text-gray-600 text-[15px]">
          Category:{" "}
          {product?.category === "men"
            ? "Men"
            : product?.category === "women"
              ? "Women"
              : product?.category === "shoes"
                ? "Shoes"
                : ""}
        </span>
        <span className="font-light text-gray-600 text-[15px]">
          Tags: backpack, hiking, women, men
        </span>
      </div>

      <div className="w-full border border-gray-200 my-5" />

      <div className="w-full flex flex-col items-start gap-3">
        <h3 className="font-medium text-[18px]">Description</h3>
        <p className="font-light text-gray-600 text-[16px] leading-[1.3]">
          Adipiscing nisi, lectus sit pharetra nunc, sit mi egestas sit velit
          tristique quisque et amet odio donec mauris integer imperdiet arcu
          orci, dignissim id duis dictum malesuada nunc, tempor felis.
        </p>
        <p className="font-light text-gray-600 text-[16px] leading-[1.3]">
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

export default ProductInfo;
