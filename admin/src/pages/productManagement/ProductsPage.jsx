import { Link, useSearchParams } from "react-router-dom";
import ProductsTable from "../../components/product-management/ProductsTable";
import SearchField from "../../components/ui/SearchField";
import { useGetProductsQuery } from "../../services/productApi/productApi";
import PageLoader from "../../components/ui/PageLoader";
import ErrorPage from "../../components/ui/ErrorPage";
import ProductFilter from "../../components/product-management/ProductFilter";
import ProductSortFilter from "../../components/product-management/ProductSortFilter";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";
  const productFilter = searchParams.get("categoryId") || "";
  const selectedCategory = searchParams.get("filter") || "";
  const sortBy = searchParams.get("sort") || "";

  const { data, isError, isFetching, isLoading } = useGetProductsQuery({
    page: 1,
    limit: 10,
    search: searchTerm,
    category: productFilter,
    sortBy,
  });

  const products = data?.products;
  const totalProducts = data?.pagination?.total;

  if (isError) return <ErrorPage />;

  return (
    <main className="w-full bg-white py-6 lg:px-6">
      <div className="w-full flex items-center justify-between flex-wrap lg:flex-nowrap gap-5">
        <h1 className="text-black page-heading">Products</h1>
        <div className="w-full flex items-center justify-end gap-2">
          <SearchField placeholder={"Search products...."} />
          <Link
            to={"/products/add-product"}
            className="bg-(--primary-color) text-white px-4 h-11.75 text-sm font-medium flex items-center border-radius whitespace-nowrap"
          >
            <span className="hidden lg:block">Add Product</span>
            <span className="block lg:hidden">+</span>
          </Link>
        </div>
      </div>

      {products && products?.length > 0 && (
        <div className="w-full mt-5 flex items-center justify-end gap-3 flex-wrap">
          <ProductFilter />
          <ProductSortFilter />
        </div>
      )}

      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          {totalProducts && totalProducts > 0 ? (
            <ProductsTable products={products} />
          ) : (
            <div className="w-full min-h-screen flex items-center justify-center gap-2 px-4">
              {selectedCategory ? (
                <p className="secondary-text">
                  {`No products found in "${selectedCategory}" category.`}
                </p>
              ) : (
                <p className="secondary-text">
                  {searchTerm
                    ? `Nothing matches "${searchTerm}."`
                    : `You have not added any products.`}
                </p>
              )}
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default ProductsPage;
