import React from "react";
import { styles } from "../../styles/styles";

const AdventureReady = () => {
  return (
    <div
      className={`py-6 lg:py-12 ${styles.paddingHorizontal} w-full h-auto lg:h-screen`}
    >
      <div className="w-full h-full grid grid-cols-2">
        <div className="h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1502126324834-38f8e02d7160?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="h-full w-full adventure-ready-left grid grid-cols-2 p-8 gap-8">
          <div className="w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1646472582883-20400c2a86dd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full h-full">
            <img src="" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureReady;
