const Checkbox = ({ label, name, formik }) => (
  <label className="flex items-center gap-2">
    <input
      type="checkbox"
      name={name}
      checked={formik.values[name]}
      onChange={formik.handleChange}
    />
    {label}
  </label>
);

export default Checkbox;
