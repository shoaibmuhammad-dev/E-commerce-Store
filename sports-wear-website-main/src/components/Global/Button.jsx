import React from "react";

const Button = ({ text, onclick, btnType }) => {
  return (
    <button
      type={btnType}
      onClick={onclick}
      className="px-8 py-3 rounded-full bg-white text-black font-normal text-base uppercase tracking-widest"
    >
      {text}
    </button>
  );
};

export default Button;
