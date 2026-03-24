import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { PRODUCT_FILTERS } from "../../constants/productFilters";
import { useEffect, useState } from "react";

const ProductSortFilter = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState(searchParams.get("sort") || "");

  // Sync with URL if user navigates back/forward
  useEffect(() => {
    setValue(searchParams.get("sort") || "");
  }, [searchParams]);

  // Update URL when selection changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    navigate(
      {
        pathname: location.pathname,
        search: params.toString(),
      },
      { replace: true },
    );
  }, [value, searchParams, navigate, location.pathname]);

  return (
    <select
      name="sort"
      id="sort"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="bg-(--secondary-bg) border-radius text-sm text-gray-500 h-12 px-4 outline-none"
    >
      <option value="">Sort By</option>
      <option value="">All</option>

      {PRODUCT_FILTERS?.map((filter) => (
        <option key={filter.slug} value={filter.slug}>
          {filter.title}
        </option>
      ))}
    </select>
  );
};

export default ProductSortFilter;
