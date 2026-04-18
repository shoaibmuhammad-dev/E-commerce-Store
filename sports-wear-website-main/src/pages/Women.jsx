import React, { useEffect } from "react";
import WomenProducts from "../components/Women/WomenProducts";
import { useGetProductsQuery } from "../services/productApi/productApi";
import PageLoader from "../components/Global/PageLoader";
import { styles } from "../styles/styles";

const Women = () => {
  const { data, error, isLoading } = useGetProductsQuery({
    page: 1,
    limit: 10,
    search: "",
    sortBy: null,
    category: "women",
  });

  const products = data?.products;
  const pagination = data?.pagination;

  useEffect(() => {
    document.title = "Spartax - Women";
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
      <WomenProducts products={products} />
    </div>
  );
};

export default Women;
