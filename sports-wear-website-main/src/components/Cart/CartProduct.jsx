import React from "react";
import { IoIosClose } from "react-icons/io";
import { Backpack } from "../../assets/export";

const CartProduct = () => {
  return (
    <>
      <div className="w-full lg:block hidden">
        <div className="w-full grid grid-cols-5 gap-4 border-b py-3">
          <div className="flex items-center gap-4 justify-center">
            <button className="border rounded-full w-6 h-6 p-0.5">
              <IoIosClose className="w-full h-full text-gray-400" />
            </button>
            <img src={Backpack} alt="" className="w-16 h-16 bg-gray-100 p-1" />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-base font-light text-gray-500">
              Tempor id backpack 8L
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-base font-light text-gray-500">$64.80</span>
          </div>
          <div className="flex items-center justify-center">
            <button className="border w-9 h-9 flex items-center justify-center p-2 text-2xl font-light text-gray-400">
              -
            </button>
            <button
              disabled
              className="border w-9 h-9 flex items-center justify-center p-2 text-sm font-light text-gray-400"
            >
              1
            </button>
            <button className="border w-9 h-9 flex items-center justify-center p-2 text-2xl font-light text-gray-400">
              +
            </button>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-base font-light text-gray-500">$64.80</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:hidden">
        <div className="w-full py-3 border-b text-end px-4">
          <button className="border rounded-full w-6 h-6 p-0.5">
            <IoIosClose className="w-full h-full text-gray-400" />
          </button>
        </div>
        <div className="w-full border-b py-3">
          <img
            src={Backpack}
            alt=""
            className="w-16 h-16 mx-auto bg-gray-100 p-1"
          />
        </div>
        <div className="w-full flex items-center justify-between py-3 border-b px-4">
          <span className="text-sm font-medium">Product:</span>
          <span className="text-sm font-light text-gray-500">
            Tempor id backpack 8L
          </span>
        </div>
        <div className="w-full flex items-center justify-between py-3 border-b px-4">
          <span className="text-sm font-medium">Price:</span>
          <span className="text-sm font-light text-gray-500">$64.80</span>
        </div>
        <div className="w-full flex items-center justify-between py-3 border-b px-4">
          <span className="text-sm font-medium">Quantity:</span>
          <div className="flex items-center justify-end px-0">
            <button className="border w-9 h-9 flex items-center justify-center p-2 text-2xl font-light text-gray-400">
              -
            </button>
            <button
              disabled
              className="border w-9 h-9 flex items-center justify-center p-2 text-sm font-light text-gray-400"
            >
              1
            </button>
            <button className="border w-9 h-9 flex items-center justify-center p-2 text-2xl font-light text-gray-400">
              +
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-between py-3 border-b px-4">
          <span className="text-sm font-medium">Subtotal:</span>
          <span className="text-sm font-light text-gray-500">$64.80</span>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
