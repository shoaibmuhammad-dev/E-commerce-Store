const Textarea = ({ label, formik, ...props }) => (
  <div>
    <label className="block font-medium mb-1">{label}</label>
    <textarea
      {...props}
      rows={8}
      className="w-full border rounded border-gray-50 bg-(--secondary-bg) px-3 py-2 outline-none border-radius resize-none"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[props.name]}
    />
    {formik.touched[props.name] && formik.errors[props.name] && (
      <p className="text-red-500 text-sm">{formik.errors[props.name]}</p>
    )}
  </div>
);

export default Textarea;
