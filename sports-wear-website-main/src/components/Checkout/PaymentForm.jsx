import React from "react";
import { styles } from "../../styles/styles";
import { Backpack } from "../../assets/export";

const PaymentForm = () => {
  return (
    <div className={`flex flex-col gap-y-4 tracking-wide`}>
      <div className="w-full bg-gray-100 px-3 md:px-6 py-3">
        <h1 className="text-xl font-medium">Payment</h1>
        <p className="text-sm font-light text-gray-600">Of your order</p>
      </div>
      <div className="w-full px-3 md:px-6">
        <h1 className="text-xl font-semibold py-2 border-b w-auto">
          Your order
        </h1>
      </div>
      <div className="w-full px-3 md:px-6">
        <div className="border">
          <div className="w-full border-b py-3 flex items-center justify-between px-3 md:px-6">
            <p className="text-base font-light text-gray-500">Product</p>
            <p className="text-base font-light text-gray-500">Subtotal</p>
          </div>
          <div className="w-full border-b py-3 flex items-center justify-between gap-4 px-3 md:px-6">
            <div className="flex items-center gap-2 justify-start">
              <img
                src={Backpack}
                alt=""
                className="w-16 h-16 bg-gray-100 p-1"
              />
              <p className="text-base font-light text-gray-500">
                Tempor id backpack 8L × 1
              </p>
            </div>
            <p className="text-base font-light text-gray-500">$64.50</p>
          </div>
          <div className="w-full border-b py-3 flex items-center justify-between  gap-4 px-3 md:px-6">
            <div className="flex items-center gap-2 justify-start">
              <img
                src={Backpack}
                alt=""
                className="w-16 h-16 bg-gray-100 p-1"
              />
              <p className="text-base font-light text-gray-500">
                Tempor id backpack 8L × 1
              </p>
            </div>
            <p className="text-base font-light text-gray-500">$64.50</p>
          </div>
          <div className="w-full border-b py-3 flex items-center justify-between px-3 md:px-6">
            <p className="text-base font-light text-gray-500">Subtotal</p>
            <p className="text-base font-light text-gray-500">$161.30</p>
          </div>
          <div className="w-full border-b py-3 flex items-center justify-between px-3 md:px-6">
            <p className="text-lg font-medium text-gray-600">Total</p>
            <p className="text-lg font-medium text-gray-600">$161.30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
