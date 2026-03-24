import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";

const TrendingSportsWear = () => {
  return (
    <section className={`${styles.paddingHorizontal}`}>
      <section
        className={`bg-black h-auto lg:h-[80vh] 2xl:h-[70vh] tracking-wide`}
      >
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-6 lg:p-8">
            <h1
              className="text-2xl lg:text-5xl 2xl:text-6xl font-bold text-white tracking-wide"
              style={{ lineHeight: "70px" }}
            >
              Trending Sports Wear For
            </h1>
          </div>
          <Link to={"/men"} className="flex flex-col gap-3 p-6 lg:p-8">
            <img
              src="https://img.freepik.com/free-photo/young-adult-doing-indoor-sport-gym_23-2149205606.jpg?t=st=1716762575~exp=1716766175~hmac=6789871c83ab8117f4b8fedf7f72ef6a61e3ed174ef0b24394170a1fa844f37b&w=360"
              alt="men outfits picture"
              className="w-full h-5/6 brightness-75 object-cover"
            />
            <h2 className="text-white font-bold text-xl lg:text-3xl">Men</h2>
          </Link>
          <Link to={"/women"} className="flex flex-col gap-3 p-6 lg:p-8">
            <img
              src="https://img.freepik.com/free-photo/woman-pink-doing-leg-training-with-dumbells-gym_114579-2692.jpg?t=st=1716762723~exp=1716766323~hmac=19f95b09a24dff5d026c0ef6fc2a01e0e939609bdd0889f99d8a9c03968de9dd&w=360"
              alt="women outfits picture"
              className="w-full h-5/6 brightness-75 lg:order-2 object-cover"
            />
            <h2 className="text-white font-bold text-xl lg:order-1 lg:text-3xl">
              Women
            </h2>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default TrendingSportsWear;

// 667 x 1000
