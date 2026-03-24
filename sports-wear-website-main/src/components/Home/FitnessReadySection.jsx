import React from "react";
import { styles } from "../../styles/styles";
import Button from "../Global/Button";

const FitnessReadySection = () => {
  return (
    <section className={`py-6 lg:py-12 ${styles.paddingHorizontal} w-full`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 h-[50vh] lg:h-[80vh] 2xl:h-[60vh]">
        <div className="w-full h-[50vh] lg:h-[80vh] 2xl:h-[60vh]">
          <img
            src="https://img.freepik.com/free-photo/side-view-full-length-young-man-sportswear-running-treadmill-gym-muscular-young-man-blue-shorts-doing-exercises-motion-blur_639032-2736.jpg?t=st=1716772428~exp=1716776028~hmac=f2b88b56e970d2f5af23000d7e9b909af48ec7efd54577ad5cf4b82381098bc0&w=360"
            alt=""
            className="w-full h-[50vh] lg:h-[80vh] 2xl:h-[60vh] brightness-75"
          />
        </div>
        <div className="w-full h-[50vh] lg:h-[80vh] 2xl:h-[60vh]">
          <img
            src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-[50vh] lg:h-[80vh] 2xl:h-[60vh] brightness-75"
          />
        </div>
        <div className="w-full h-[50vh] lg:h-[80vh] 2xl:h-[60vh] relative">
          <img
            src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-[50vh] lg:h-[80vh] 2xl:h-[60vh] brightness-75"
          />
          <div className="absolute bottom-10 right-5 flex flex-col gap-4 items-end text-end">
            <h1 className="text-white text-4xl font-semibold tracking-wide">
              Fitness Ready
            </h1>
            <p className="text-white text-base font-light tracking-wider">
              Turpis pharetra amet nibh venenatis nibh nisl id urna, et porta
              vel, netus dui enim.
            </p>
            <Button text={"Shop now"} btnType={"button"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessReadySection;
