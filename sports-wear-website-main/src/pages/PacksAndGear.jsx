import React, { useEffect } from "react";
import PacksAndGearProducts from "../components/PacksAndGear/PacksAndGearProducts";
import PageLoader from "../components/Global/PageLoader";
import { useGetProductsQuery } from "../services/productApi/productApi";
import { styles } from "../styles/styles";

const PacksAndGear = () => {
  const { data, error, isLoading } = useGetProductsQuery({
    page: 1,
    limit: 10,
    search: "",
    sortBy: null,
    category: "packs-gear",
  });

  const products = data?.products;
  const pagination = data?.pagination;

  useEffect(() => {
    document.title = "Spartax - Packs & Gear";
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
      <PacksAndGearProducts products={products} />
    </div>
  );
};

export default PacksAndGear;
