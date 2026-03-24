import React, { useEffect } from "react";
import PacksAndGearProducts from "../components/PacksAndGear/PacksAndGearProducts";

const PacksAndGear = () => {
  useEffect(() => {
    document.title = "Spartax - Packs & Gear";
  }, []);
  return (
    <div>
      <PacksAndGearProducts />
    </div>
  );
};

export default PacksAndGear;
