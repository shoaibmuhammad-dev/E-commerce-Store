import React, { useEffect } from "react";
import MenProducts from "../components/Men/MenProducts";

const Men = () => {
  useEffect(() => {
    document.title = "Spartax - Men";
  }, []);
  return (
    <div>
      <MenProducts />
    </div>
  );
};

export default Men;
