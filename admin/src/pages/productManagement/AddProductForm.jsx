import { useFormik } from "formik";
import Checkbox from "../../components/ui/Checkbox";
import Input from "../../components/ui/TextField";
import Textarea from "../../components/ui/Textarea";
import {
  productInitialValues,
  productValidationSchema,
} from "../../validation/productSchema";
import Button from "../../components/ui/Button";
import UploadImage from "../../components/ui/UploadImage";
import UploadProductCoverImage from "../../components/ui/UploadProductCoverImage";
import CategoriesDropdown from "../../components/ui/CategoriesDropdown";
import { useAddProductMutation } from "../../services/productApi/productApi";
import { enqueueSnackbar } from "notistack";
import ButtonLoader from "../../components/ui/ButtonLoader";

const AddProductForm = () => {
  const [createProduct, { isLoading }] = useAddProductMutation();

  const formik = useFormik({
    initialValues: productInitialValues,
    validationSchema: productValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();

        Object.keys(values).forEach((key) => {
          if (key === "images") {
            values.images.forEach((img) => formData.append("images", img));
          } else {
            formData.append(key, values[key]);
          }
        });

        await createProduct(formData).unwrap();

        enqueueSnackbar("Product created successfully", {
          variant: "success",
        });

        resetForm();
      } catch (error) {
        enqueueSnackbar(error?.data?.message || "Failed to create product", {
          variant: "error",
        });
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full bg-white space-y-4 mt-10 px-4 max-w-5xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Input label="Title" name="title" formik={formik} />
        <Input label="Slug" name="slug" formik={formik} />
      </div>

      <Textarea
        label="Short Description"
        name="shortDescription"
        formik={formik}
      />

      <Textarea label="Description" name="description" formik={formik} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <UploadProductCoverImage formik={formik} />

        <UploadImage formik={formik} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Input type="number" label="Price" name="price" formik={formik} />

        <Input
          type="number"
          label="Discount (%)"
          name="discountPercentage"
          formik={formik}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Input type="number" label="Stock" name="stock" formik={formik} />

        <CategoriesDropdown formik={formik} />
      </div>

      <div className="flex gap-6">
        <Checkbox label="Active" name="isActive" formik={formik} />
        <Checkbox label="New Arrival" name="isNewArrival" formik={formik} />
        <Checkbox label="Featured" name="isFeatured" formik={formik} />
      </div>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-(--primary-color) text-white h-11 text-center w-full font-medium text-base outline-none cursor-pointer relative border-radius max-w-40"
        >
          {isLoading ? <ButtonLoader /> : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
