import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import Button from "../../components/ui/Button";
import { useLoginMutation } from "../../services/authApi/authApi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [login, { isError, isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await login({
          email: values.email.trim(),
          password: values.password.trim(),
          userType: "admin",
        }).unwrap();
        enqueueSnackbar("Login successful", { variant: "success" });
        Cookies.set("adminToken", response?.token);
        Cookies.set("adminData", JSON.stringify(response?.user));
        navigate("/");
        // resetForm()
      } catch (error) {
        console.log("login error >>> ", error);
      }
    },
  });

  return (
    <div className="w-full relative bg-white p-8 lg:p-10 xl:p-20 max-w-xl">
      <div className="w-full text-center space-y-2">
        <h1 className="font-bold text-2xl">Sign In</h1>
        <p className="secondary-text text-lg">
          Please enter your details to sign in.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="w-full mt-5">
        <div className="w-full">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-200 h-11 px-4 outline-none"
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="text-red-500">{formik.errors.email}</small>
          ) : null}
        </div>
        <div className="w-full mt-4">
          <div className="w-full border border-gray-200 h-11 px-4 flex items-center justify-between gap-2">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full outline-none"
            />
            <button type="button" onClick={() => setShowPass((prev) => !prev)}>
              {showPass ? (
                <IoEyeOffOutline className="secondary-text text-lg" />
              ) : (
                <IoEyeOffSharp className="secondary-text text-lg" />
              )}
            </button>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <small className="text-red-500">{formik.errors.password}</small>
          ) : null}
        </div>

        <div className="w-full mt-5">
          <Button type={"submit"} title={"Sign In"} isLoading={isLoading} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
