import { Link, useLocation, useNavigate } from "react-router-dom";
import { PAGE_LINKS } from "../../data/pageLinks";
import Cookies from "js-cookie";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToLink = (link, name) => {
    navigate(link);
  };

  const handleLogout = async () => {
    Cookies.remove("adminToken");
    Cookies.remove("adminData");
    navigate("/login");
  };
  return (
    <div className="w-full h-full py-6 px-8 flex flex-col items-start gap-y-6 bg-white">
      <div className="w-full">
        <Link
          to="/"
          className="text-black font-semibold text-2xl uppercase leading-none logo-fonts"
        >
          sparta
          <span className="text-(--primary-color) logo-fonts">x</span>
        </Link>
      </div>
      <ul className="w-full flex flex-col gap-y-1">
        {PAGE_LINKS?.map((link, index) => {
          const Icon = link?.icon;
          return (
            <li className={`w-full text-black h-12`} key={index}>
              <Link
                to={link?.page}
                onClick={() => navigateToLink(link?.page, link?.title)}
                className={`text-sm flex items-center gap-x-2.5 font-medium w-full h-12 px-4 rounded-xl outline-none ${
                  location?.pathname === link?.page ||
                  location?.pathname.startsWith(link?.page + "/")
                    ? "bg-(--primary-color) text-white"
                    : "bg-transparent text-black hover:bg-(--primary-color) hover:text-white transition-all duration-300 group"
                }`}
              >
                <div className="min-w-5">
                  <Icon size={20} />
                </div>

                <span className="">{link?.title}</span>
              </Link>
            </li>
          );
        })}

        <button
          type="button"
          onClick={() => handleLogout()}
          className={`text-sm flex items-center gap-x-2.5 font-medium w-full h-12.25 px-4 rounded-xl outline-none 
                    bg-transparent text-black hover:bg-(--primary-color) hover:text-white transition-all duration-300 group"
                }`}
        >
          <div className="min-w-5">
            <FiLogOut className="text-lg leading-none" />
          </div>
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
