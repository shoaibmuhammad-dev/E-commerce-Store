import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { Backpack } from "../../assets/export";
import { IoCloseOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";

const CartSidebar = ({ showCart, onclick }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/cart");
    onclick();
  };
  return (
    <div
      className={`w-full h-screen fixed top-0 bottom-0 left-0 right-0 bg-transparent tracking-wide ${
        showCart ? "translate-x-0" : "translate-x-full"
      } transition-all duration-500 z-50`}
    >
      <div className="w-full md:w-[60%] lg:w-[35%] float-end bg-white h-full shadow-xl relative flex flex-col z-50">
        <div className="w-full h-[70%]">
          <div className="w-full h-[13%] border-b flex items-center justify-between px-6">
            <span className="text-base font-light text-gray-500">
              Shopping Cart
            </span>
            <button onClick={onclick}>
              <IoClose className="text-lg" />
            </button>
          </div>
          <div className="w-full min-h-[57%] flex flex-col overflow-y-scroll">
            <div className="w-full grid grid-cols-5 px-6 border-b py-3">
              <div className="col-span-1">
                <img
                  src={Backpack}
                  alt=""
                  className="w-16 h-16 bg-gray-100 p-1"
                />
              </div>
              <div className="col-span-3 flex flex-col justify-center gap-1">
                <p className="text-base font-light text-gray-500">
                  lorem ipsum
                </p>
                <div className="flex">
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2">
                    <HiMinusSmall className="text-gray-500" />
                  </button>
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2 text-gray-500">
                    1
                  </button>
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2">
                    <GoPlus className="text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-end justify-center gap-1">
                <button className="w-6 h-6 rounded-full p-1 border border-gray-500">
                  <IoCloseOutline className="w-full h-full text-gray-500" />
                </button>
                <p className="text-gray-500 text-base font-light">$450.50</p>
              </div>
            </div>
            <div className="w-full grid grid-cols-5 px-6 border-b py-3">
              <div className="col-span-1">
                <img
                  src={Backpack}
                  alt=""
                  className="w-16 h-16 bg-gray-100 p-1"
                />
              </div>
              <div className="col-span-3 flex flex-col justify-center gap-1">
                <p className="text-base font-light text-gray-500">
                  lorem ipsum
                </p>
                <div className="flex">
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2">
                    <HiMinusSmall className="text-gray-500" />
                  </button>
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2 text-gray-500">
                    1
                  </button>
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2">
                    <GoPlus className="text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-end justify-center gap-1">
                <button className="w-6 h-6 rounded-full p-1 border border-gray-500">
                  <IoCloseOutline className="w-full h-full text-gray-500" />
                </button>
                <p className="text-gray-500 text-base font-light">$450.50</p>
              </div>
            </div>
            <div className="w-full grid grid-cols-5 px-6 border-b py-3">
              <div className="col-span-1">
                <img
                  src={Backpack}
                  alt=""
                  className="w-16 h-16 bg-gray-100 p-1"
                />
              </div>
              <div className="col-span-3 flex flex-col justify-center gap-1">
                <p className="text-base font-light text-gray-500">
                  lorem ipsum
                </p>
                <div className="flex">
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2">
                    <HiMinusSmall className="text-gray-500" />
                  </button>
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2 text-gray-500">
                    1
                  </button>
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2">
                    <GoPlus className="text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-end justify-center gap-1">
                <button className="w-6 h-6 rounded-full p-1 border border-gray-500">
                  <IoCloseOutline className="w-full h-full text-gray-500" />
                </button>
                <p className="text-gray-500 text-base font-light">$450.50</p>
              </div>
            </div>
            <div className="w-full grid grid-cols-5 px-6 border-b py-3">
              <div className="col-span-1">
                <img
                  src={Backpack}
                  alt=""
                  className="w-16 h-16 bg-gray-100 p-1"
                />
              </div>
              <div className="col-span-3 flex flex-col justify-center gap-1">
                <p className="text-base font-light text-gray-500">
                  lorem ipsum
                </p>
                <div className="flex">
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2">
                    <HiMinusSmall className="text-gray-500" />
                  </button>
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2 text-gray-500">
                    1
                  </button>
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2">
                    <GoPlus className="text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-end justify-center gap-1">
                <button className="w-6 h-6 rounded-full p-1 border border-gray-500">
                  <IoCloseOutline className="w-full h-full text-gray-500" />
                </button>
                <p className="text-gray-500 text-base font-light">$450.50</p>
              </div>
            </div>
            <div className="w-full grid grid-cols-5 px-6 border-b py-3">
              <div className="col-span-1">
                <img
                  src={Backpack}
                  alt=""
                  className="w-16 h-16 bg-gray-100 p-1"
                />
              </div>
              <div className="col-span-3 flex flex-col justify-center gap-1">
                <p className="text-base font-light text-gray-500">
                  lorem ipsum
                </p>
                <div className="flex">
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2">
                    <HiMinusSmall className="text-gray-500" />
                  </button>
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2 text-gray-500">
                    1
                  </button>
                  <button className="w-8 h-8 text-xs border flex items-center justify-center p-2">
                    <GoPlus className="text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-end justify-center gap-1">
                <button className="w-6 h-6 rounded-full p-1 border border-gray-500">
                  <IoCloseOutline className="w-full h-full text-gray-500" />
                </button>
                <p className="text-gray-500 text-base font-light">$450.50</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[30%] flex flex-col gap-1 bg-white">
          <div className="w-full flex items-center justify-between px-6 border-t border-b py-2">
            <span className="text-lg font-light text-gray-400">Subtotal:</span>
            <span className="text-lg font-light text-gray-400">$109.00</span>
          </div>
          <div className="w-full px-6 pt-2">
            <button
              onClick={handleNavigate}
              className="w-full py-2 text-white block uppercase text-sm font-medium text-center bg-orange-600"
            >
              view Cart
            </button>
          </div>
          <div className="w-full px-6 py-2">
            <Link
              to="/checkout"
              className="w-full py-2 text-white block uppercase text-sm font-medium text-center bg-orange-600"
            >
              checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
