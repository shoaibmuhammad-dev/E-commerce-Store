import React from "react";
import Navbar from "./Navbar";
import Button from "../Global/Button";
import { styles } from "../../styles/styles";

const Hero = () => {
  return (
    <main className="w-screen h-auto lg:h-screen home-hero">
      <Navbar />
      <div
        className={`w-full flex flex-col gap-10 ${styles.paddingHorizontal} h-5/6 justify-center py-12`}
      >
        <h1 className="text-white font-semibold text-6xl lg:text-8xl tracking-wide">
          Let's Level Up Your <br /> Game
        </h1>
        <p className="text-lg font-medium text-white tracking-wider">
          Nam natoque in massa bibendum lacus, et arcu cursus nisl <br /> rutrum
          at tincidunt in sit in massa adipiscing lorem fusce.
        </p>
        <div>
          <Button text={"Shop Now"} btnType={"button"} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
