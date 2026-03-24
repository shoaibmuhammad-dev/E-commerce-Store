import React, { useEffect } from "react";
import WomenProducts from "../components/Women/WomenProducts";

const Women = () => {
  useEffect(() => {
    document.title = "Spartax - Women";
  }, []);
  return (
    <div>
      <WomenProducts />
    </div>
  );
};

export default Women;
