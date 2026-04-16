import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../../services/categoryApi/categoryApi";

const ProductFilter = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(searchParams.get("filter") || "");

  const { data, isLoading, isError } = useGetCategoriesQuery(undefined);

  // Sync state when URL changes
  useEffect(() => {
    setValue(searchParams.get("filter") || "");
  }, [searchParams]);

  // Update URL with debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (value.trim()) {
        const selectedCategory = data?.categories?.find(
          (cat) => cat.slug === value,
        );

        if (selectedCategory) {
          params.set("filter", selectedCategory.slug);
          params.set("categoryId", selectedCategory._id);
        }
      } else {
        params.delete("filter");
        params.delete("categoryId");
      }

      navigate(
        {
          pathname: location.pathname,
          search: params.toString(),
        },
        { replace: true },
      );
    }, 300);

    return () => clearTimeout(handler);
  }, [value, data, searchParams, navigate, location.pathname]);

  if (isLoading || isError) return;

  return (
    <select
      name="category"
      id="category"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="bg-(--secondary-bg) border-radius border border-gray-100 text-sm text-gray-500 h-12 px-4 outline-none"
    >
      <option value="">Category</option>
      <option value="">All</option>

      {data?.categories?.map((filter) => (
        <option key={filter.slug} value={filter.slug}>
          {filter.title}
        </option>
      ))}
    </select>
  );
};

export default ProductFilter;
