import React, { useEffect } from "react";
import MenProducts from "../components/Men/MenProducts";
import { useGetProductsQuery } from "../services/productApi/productApi";
import PageLoader from "../components/Global/PageLoader";

const Men = () => {
  const { data, error, isLoading } = useGetProductsQuery({
    page: 1,
    limit: 10,
    search: "",
    sortBy: null,
    category: "men",
  });

  const products = data?.products;
  const pagination = data?.pagination;

  useEffect(() => {
    document.title = "Spartax - Men";
  }, []);

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <MenProducts products={products} />
    </div>
  );
};

export default Men;
