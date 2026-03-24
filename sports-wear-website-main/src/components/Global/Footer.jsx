import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className={`w-full h-auto lg:h-screen 2xl:h-auto py-6 lg:py-12 ${styles.paddingHorizontal} bg-black text-white tracking-wide flex flex-col justify-between gap-6 2xl:gap-40`}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0">
        <div className="col-span-3 md:col-span-1 flex flex-col justify-between gap-y-4">
          <h1 className="text-white font-semibold text-3xl uppercase">
            sparta<span className="text-orange-600">x</span>
          </h1>
          <div className="flex items-center gap-4">
            <Link to="/">
              <MdFacebook className="text-lg hover:text-orange-600 transition-all duration-300" />
            </Link>
            <Link to="/">
              <IoLogoTwitter className="text-lg hover:text-orange-600 transition-all duration-300" />
            </Link>
            <Link to="/">
              <FaYoutube className="text-lg hover:text-orange-600 transition-all duration-300" />
            </Link>
            <Link to="/">
              <FaInstagram className="text-lg hover:text-orange-600 transition-all duration-300" />
            </Link>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 flex flex-col gap-6">
          <h2 className="text-base font-medium uppercase">About us</h2>
          <p className="font-extralight text-lg leading-7">
            Diam neque diam sed tincidunt lobortis facilisis massa eget
            scelerisque tincidunt amet in blandit maecenas egestas eu quam
            aenean odio urna facilisis integer tincidunt ut eu eu ultrices
            integer quisque vivamus felis leo massa maecenas in et tempus nisl
            morbi euismod iaculis pellentesque urna vulputate suspendisse eget
            sit.
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Shop at SpartaX</h1>
          <div className="flex flex-col gap-1">
            <Link to="/" className="text-lg font-light">
              Shop
            </Link>
            <Link to="/" className="text-lg font-light">
              Top Deals
            </Link>
            <Link to="/" className="text-lg font-light">
              My Account
            </Link>
            <Link to="/" className="text-lg font-light">
              Return Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold">About SpartaX</h1>
          <div className="flex flex-col gap-1">
            <Link to="/" className="text-lg font-light">
              About
            </Link>
            <Link to="/" className="text-lg font-light">
              Spartax Tax
            </Link>
            <Link to="/" className="text-lg font-light">
              Press Room
            </Link>
            <Link to="/" className="text-lg font-light">
              Careers
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Get in Touch</h1>
          <div className="flex flex-col gap-1">
            <Link to="/" className="text-lg font-light">
              Bundesstraße 123, 456 Hamburg, Germany
            </Link>
            <Link to="/" className="text-lg font-light">
              Call: +49-1234-56-7
            </Link>
            <Link to="/" className="text-lg font-light">
              mail@example.com
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-y-4 justify-between">
        <p className="text-sm font-extralight text-gray-400">
          Copyright © 2024 Sports Wear Store
        </p>
        <p className="text-sm font-extralight text-gray-400">
          Powered by Sports Wear Store
        </p>
      </div>
    </footer>
  );
};

export default Footer;
