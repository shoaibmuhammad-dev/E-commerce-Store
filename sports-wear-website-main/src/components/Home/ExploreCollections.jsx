import React from "react";
import { styles } from "../../styles/styles";
import { BiSolidFaceMask } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { FaShoePrints } from "react-icons/fa6";
import { FaBicycle } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { GiLifeJacket } from "react-icons/gi";
import { PiTentFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const ExploreCollections = () => {
  return (
    <section
      className={`w-full pt-6 pb-12 ${styles.paddingHorizontal} flex flex-col gap-8`}
    >
      <div className="w-full text-center">
        <h1 className="text-2xl mx-auto font-bold">Explore Collection</h1>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link
          to="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <BiSolidFaceMask className="text-7xl text-orange-600" />
          <h1 className="text-2xl font-semibold">Face Masks</h1>
        </Link>
        <Link
          to="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <FaTshirt className="text-7xl text-orange-600" />
          <h1 className="text-2xl font-semibold">Apparel</h1>
        </Link>
        <Link
          to="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <FaSuitcaseRolling className="text-7xl text-orange-600" />
          <h1 className="text-2xl font-semibold">Packs & Gear</h1>
        </Link>
        <Link
          to="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <FaShoePrints className="text-7xl text-orange-600" />
          <h1 className="text-2xl font-semibold">Footwear</h1>
        </Link>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        <Link
          to="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <FaBicycle className="text-7xl text-orange-600" />
          <h1 className="text-2xl font-semibold">Bicycle</h1>
        </Link>
        <Link
          to="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <GiMountainClimbing className="text-7xl text-orange-600" />
          <h1 className="text-2xl font-semibold">Equipment</h1>
        </Link>
        <Link
          to="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <GiLifeJacket className="text-7xl text-orange-600" />
          <h1 className="text-2xl font-semibold">Outwear</h1>
        </Link>
        <Link
          to="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <PiTentFill className="text-7xl text-orange-600" />
          <h1 className="text-2xl font-semibold">Tents</h1>
        </Link>
      </div>
    </section>
  );
};

export default ExploreCollections;
