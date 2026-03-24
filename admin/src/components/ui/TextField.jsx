const Input = ({ label, formik, ...props }) => (
  <div>
    <label className="block font-medium mb-1">{label}</label>
    <input
      {...props}
      className="w-full border rounded input border-radius"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[props.name]}
    />
    {formik.touched[props.name] && formik.errors[props.name] && (
      <p className="text-red-500 text-sm">{formik.errors[props.name]}</p>
    )}
  </div>
);

export default Input;
