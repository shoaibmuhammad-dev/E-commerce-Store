import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { LuSearch } from "react-icons/lu";

const SearchField = ({ placeholder }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setValue(searchParams.get("q") || "");
  }, [searchParams]);

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (value.trim()) params.set("q", value.trim());
      else params.delete("q");

      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }, 500);

    return () => clearTimeout(handler);
  }, [value]);

  return (
    <div className="w-full max-w-[320px] h-12 border border-gray-100 min-w-63 lg:max-w-63 bg-(--secondary-bg) flex items-center justify-start gap-2 px-3 border-radius">
      <LuSearch className="text-xl text-gray-600" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-transparent placeholder:text-gray-600 text-gray-600 text-sm outline-none"
      />
    </div>
  );
};

export default SearchField;
