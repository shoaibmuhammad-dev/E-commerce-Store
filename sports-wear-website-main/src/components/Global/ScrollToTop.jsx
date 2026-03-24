import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };
  return (
    <button
      className={`bg-orange-600 fixed bottom-6 right-2 md:right-6 w-9 h-9 rounded-full flex items-center justify-center ${
        isVisible ? "visible" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <IoArrowUp className="text-white text-lg" />
    </button>
  );
};

export default ScrollToTop;
