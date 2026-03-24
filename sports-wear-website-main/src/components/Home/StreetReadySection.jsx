import React from "react";
import { styles } from "../../styles/styles";
import Button from "../Global/Button";

const StreetReadySection = () => {
  return (
    <section className={`py-6 lg:py-12 ${styles.paddingHorizontal}`}>
      <div className="w-full h-full street-ready-section relative overflow-hidden flex flex-col justify-between py-8 lg:py-16 px-8 lg:px-12">
        <h1 className="text-white font-semibold text-3xl uppercase">
          sparta<span className="text-orange-600">x</span>
        </h1>
        <div className="flex flex-col gap-5 my-10 lg:my-14 2xl:my-20">
          <h2 className="text-white font-semibold text-6xl">Street Ready</h2>
          <p className="text-white text-lg font-semibold">
            Cras tristique neque vel justo ultricies <br /> faucibus. Mattis ut
            fermentum.
          </p>
        </div>
        <div>
          <Button text={"shop now"} btnType={"button"} />
        </div>
      </div>
    </section>
  );
};

export default StreetReadySection;
