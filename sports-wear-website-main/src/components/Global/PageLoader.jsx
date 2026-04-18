import React from "react";
import Loader from "./Loader";
import { styles } from "../../styles/styles";

const PageLoader = () => {
  return (
    <div
      className={`py-6 lg:py-12 ${styles.paddingHorizontal} flex items-center justify-center`}
    >
      <Loader />
    </div>
  );
};

export default PageLoader;
