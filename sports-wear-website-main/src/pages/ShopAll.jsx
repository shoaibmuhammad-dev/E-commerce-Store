import React, { useEffect } from "react";
import Products from "../components/ShopAll/Products";
import PageLoader from "../components/Global/PageLoader";
import { useGetProductsQuery } from "../services/productApi/productApi";
import { styles } from "../styles/styles";

const ShopAll = () => {
  const { data, error, isLoading } = useGetProductsQuery({
    page: 1,
    limit: 12,
    search: "",
    sortBy: null,
    category: "",
  });

  const products = data?.products;
  const pagination = data?.pagination;

  useEffect(() => {
    document.title = "Spartax - Shop All";
  }, []);

  if (isLoading) return <PageLoader />;

  if (products?.length === 0) {
    return (
      <div className={`w-full ${styles.paddingHorizontal} py-y lg:py-12`}>
        <div
          className={`w-full h-screen ${styles.paddingHorizontal} py-y lg:py-12 bg-white flex items-center justify-center`}
        >
          <p className="">No Products Found.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default ShopAll;
