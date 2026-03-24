import { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useOnlineSatus from "../../hooks/useOnlineSatus";
import { FaUserCircle } from "react-icons/fa";

const DashboardLayout = ({ pages }) => {
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const [isOpen, setisOpen] = useState(false);
  const isOnline = useOnlineSatus();

  const toggleModal = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="w-screen h-screen flex justify-start items-start bg-[#f9fafb]">
      <div
        onClick={toggleModal}
        className={`w-screen h-screen fixed top-0 left-0 transition-all duration-500  ${
          isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:static z-2000 lg:z-auto lg:w-60 xl:w-72 flex flex-col gap-3 items-center justify-start py-0 lg:h-full`}
      >
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 transition-all duration-200  ${
            isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
          } lg:static w-[60%] z-2000 lg:z-auto lg:w-60 xl:w-72 flex flex-col gap-3 items-center justify-start h-full`}
        >
          <Sidebar />
        </div>
      </div>

      <div className="w-full relative lg:w-[calc(100%-15rem)] xl:w-[calc(100%-18rem)] h-full  overflow-y-auto overflow-x-hidden">
        <div className="sticky top-0 left-0 w-full h-18 bg-[#f9fafb] flex items-center justify-between lg:justify-end px-4 z-20">
          <button
            onClick={() => setisOpen((prev) => !prev)}
            className="lg:hidden block"
          >
            <HiOutlineMenuAlt2 className="text-2xl" />
          </button>
          {/* <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-[#5C5C5C] text-sm flex items-center gap-1"
          >
            <HiOutlineArrowLeft className="text-black text-base" /> Back
          </button> */}
          <div className="flex gap-3 items-center py-4 font-normal text-gray-900">
            <p className="font-semibold text-gray-700 leading-tight">Admin</p>
            <FaUserCircle size={30} className="text-gray-700" />
            {/* <img
              class="h-13.5 min-w-13.5 max-w-13.5 rounded-full object-cover object-center"
              src={"/profile-icon.png"}
              alt=""
            /> */}
          </div>
        </div>
        <div className="w-full text-black p-5">
          {isOnline ? (
            pages
          ) : (
            <div className="w-full min-h-screen flex items-center justify-center px-4 rounded-[18px]">
              <p className="text-sm font-medium text-gray-500">
                No internet connection.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
