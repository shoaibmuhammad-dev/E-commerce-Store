import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const MAX_IMAGES = 10;
const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"];

const UploadImage = ({ formik }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    const newImages = [];

    for (let file of files) {
      // Validate file type
      if (!ALLOWED_TYPES.includes(file.type)) {
        enqueueSnackbar("Only PNG, JPG and JPEG files are allowed.", {
          variant: "error",
        });
        continue;
      }

      // Validate file size
      if (file.size > MAX_SIZE) {
        enqueueSnackbar("Each image must be less than 5MB.", {
          variant: "error",
        });
        continue;
      }

      // Validate max images
      if (images.length + newImages.length >= MAX_IMAGES) {
        enqueueSnackbar(`You can upload maximum ${MAX_IMAGES} images.`, {
          variant: "error",
        });
        break;
      }

      newImages.push({
        file,
        preview: URL.createObjectURL(file),
      });
    }

    const updated = [...images, ...newImages];

    setImages(updated);

    formik.setFieldValue(
      "images",
      updated.map((img) => img.file),
    );

    // reset input so same file can be selected again
    e.target.value = "";
  };

  const handleRemove = (index) => {
    const updated = [...images];

    // cleanup memory
    URL.revokeObjectURL(updated[index].preview);

    updated.splice(index, 1);

    setImages(updated);

    formik.setFieldValue(
      "images",
      updated.map((img) => img.file),
    );
  };

  // reset previews when form resets
  useEffect(() => {
    if (!formik.values.images.length) {
      images.forEach((img) => URL.revokeObjectURL(img.preview));
      setImages([]);
    }
  }, [formik.values.images]);

  return (
    <div className="w-full relative">
      <label className="block font-medium mb-1">
        Upload Product Images (Max {MAX_IMAGES})
      </label>

      {images.length < MAX_IMAGES && (
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="productImages"
            className="flex flex-col items-center justify-center w-full h-64 bg-(--secondary-bg) border-radius cursor-pointer hover:bg-neutral-tertiary-medium"
          >
            <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
              <p className="mb-2 text-sm secondary-text">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs secondary-text">
                PNG, JPG, JPEG (MAX. 5 MB each)
              </p>
            </div>

            <input
              id="productImages"
              type="file"
              multiple
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
      )}

      {/* Preview Thumbnails */}
      <div className="w-full mt-3 flex items-center gap-3 flex-wrap">
        {images.map((img, index) => (
          <div key={index} className="w-14 h-14 relative">
            <img
              src={img.preview}
              alt="product"
              className="w-full h-full border-radius object-cover"
            />

            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="bg-red-500 w-5 h-5 rounded-full p-1 absolute -top-2 -right-2 flex items-center justify-center"
            >
              <IoClose className="w-full h-full text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
