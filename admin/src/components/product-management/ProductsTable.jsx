import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";

const ProductsTable = ({ products }) => {
  return (
    <div className="relative mt-5 overflow-x-auto bg-white">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-(--secondary-bg) border-radius">
          <tr className="font-medium">
            <th scope="col" className="px-6 py-5 rounded-l-[10px]">
              Product name
            </th>
            <th scope="col" className="px-6 py-5">
              Category
            </th>
            <th scope="col" className="px-6 py-5">
              Price
            </th>
            <th scope="col" className="px-6 py-5">
              Available Stock
            </th>

            <th scope="col" className="px-6 py-5">
              Creation Date
            </th>
            <th scope="col" className="px-6 py-5 rounded-r-[10px]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => {
            return (
              <tr
                key={index}
                className="bg-white text-gray-500 border-b border-gray-200"
              >
                <td className="px-6 py-4 flex items-center gap-2">
                  <img
                    src={product?.coverImage}
                    alt="men-sports-wear-shirt"
                    width={40}
                    height={40}
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                    className="border-radius max-h-10 object-cover"
                  />
                  <Link
                    to={`/products/${product?.slug}`}
                    className="font-normal whitespace-nowrap"
                  >
                    {product?.title}
                  </Link>
                </td>
                <td className="px-6 py-4">{product?.category?.title}</td>
                <td className="px-6 py-4">${product?.finalPrice}</td>
                <td className="px-6 py-4">{product?.stock}</td>
                <td className="px-6 py-4">{formatDate(product?.createdAt)}</td>
                <td className="px-6 py-4 space-x-3">
                  <Link
                    to={`/products/${product?.slug}/update`}
                    type="button"
                    className="text-blue-500 underline"
                  >
                    Edit
                  </Link>
                  <button type="button" className="text-red-500 underline">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
