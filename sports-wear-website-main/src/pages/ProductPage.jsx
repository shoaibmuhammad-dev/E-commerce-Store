import React from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { styles } from "../styles/styles";
import { useGetProductQuery } from "../services/productApi/productApi";
import { useParams } from "react-router-dom";
import Loader from "../components/Global/Loader";
import PageLoader from "../components/Global/PageLoader";

const ProductPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGetProductQuery({ slug });
  const product = data?.product;

  if (isLoading) return <PageLoader />;

  return (
    <div className={`w-full ${styles.paddingHorizontal} py-12`}>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
