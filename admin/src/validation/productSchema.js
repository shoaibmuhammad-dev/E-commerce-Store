// validation/productSchema.js
import * as Yup from "yup";

export const productInitialValues = {
  title: "",
  description: "",
  shortDescription: "",
  coverImage: null,
  images: [],
  price: "",
  discountPercentage: 0,
  category: "",
  stock: 1,
  slug: "",
  isActive: true,
  isNewArrival: false,
  isFeatured: false,
};

export const productValidationSchema = Yup.object({
  title: Yup.string().trim().required("Title is required"),
  description: Yup.string().trim().required("Description is required"),
  price: Yup.number().min(1).required("Price is required"),
  discountPercentage: Yup.number().min(0).max(100),
  category: Yup.string().required("Category is required"),
  stock: Yup.number().min(1).required("Stock is required"),
  slug: Yup.string().required("Slug is required"),
  isActive: Yup.boolean(),
  isNewArrival: Yup.boolean(),
  coverImage: Yup.mixed().required("Cover image is required"),
  images: Yup.array().of(Yup.mixed()),
});
