import { useGetCategoriesQuery } from "../../services/categoryApi/categoryApi";

const CategoriesDropdown = ({ formik }) => {
  const { data } = useGetCategoriesQuery();

  const isSelected = !!formik.values.category;

  return (
    <div>
      <label className="block font-medium mb-1">Choose a category</label>

      <select
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`w-full border rounded input border-radius ${
          isSelected ? "text-black" : "text-gray-400"
        }`}
      >
        <option value="">Select a category</option>

        {data?.categories?.map((c) => (
          <option key={c._id} value={c._id}>
            {c.title}
          </option>
        ))}
      </select>

      {formik.touched.category && formik.errors.category && (
        <p className="text-red-500 text-sm">{formik.errors.category}</p>
      )}
    </div>
  );
};

export default CategoriesDropdown;
