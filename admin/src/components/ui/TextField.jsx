const Input = ({ label, formik, placeholder = "", ...props }) => (
  <div>
    <label className="block font-medium mb-1">{label}</label>
    <input
      className="w-full border rounded input border-radius"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[props.name]}
      placeholder={placeholder}
      {...props}
    />
    {formik.touched[props.name] && formik.errors[props.name] && (
      <p className="text-red-500 text-sm">{formik.errors[props.name]}</p>
    )}
  </div>
);

export default Input;
