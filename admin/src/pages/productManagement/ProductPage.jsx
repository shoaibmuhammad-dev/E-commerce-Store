import { Link, useParams } from "react-router-dom";
import ProductGallery from "../../components/product-management/ProductGallery";
import ProductInfo from "../../components/product-management/ProductInfo";
import { useGetProductQuery } from "../../services/productApi/productApi";
import PageLoader from "../../components/ui/PageLoader";
import { FiArrowLeft } from "react-icons/fi";

const ProductPage = () => {
  const { slug } = useParams();

  const { data, isLoading, isError, error } = useGetProductQuery({
    slug,
  });

  const product = data?.product;

  if (isLoading) return <PageLoader />;

  return (
    <>
      <div className="">
        <Link
          to={"/products"}
          className="bg-white px-4 py-3 border-radius text-sm inline-flex items-center gap-1 text-gray-600 font-medium"
        >
          <FiArrowLeft size={18} />
          Back
        </Link>
      </div>
      <main className="w-full bg-white py-6 lg:px-6 border-radius mt-4">
        <div className="w-full flex items-center justify-between flex-wrap lg:flex-nowrap gap-5">
          <h1 className="text-black page-heading">Product Details</h1>
        </div>

        <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </main>
    </>
  );
};

export default ProductPage;
