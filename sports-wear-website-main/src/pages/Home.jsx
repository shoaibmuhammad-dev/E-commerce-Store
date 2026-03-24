import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import ShopByCategory from "../components/Home/ShopByCategory";
import TrendingSportsWear from "../components/Home/TrendingSportsWear";
import ProductGrid from "../components/Home/ProductGrid";
import FitnessReadySection from "../components/Home/FitnessReadySection";
import StreetReadySection from "../components/Home/StreetReadySection";
import ExploreCollections from "../components/Home/ExploreCollections";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Sports Wear Store";
  }, []);
  return (
    <div className="bg-gray-50">
      <Hero />
      <ShopByCategory />
      <TrendingSportsWear />
      <ProductGrid />
      <FitnessReadySection />
      <StreetReadySection />
      <ExploreCollections />
    </div>
  );
};

export default Home;
