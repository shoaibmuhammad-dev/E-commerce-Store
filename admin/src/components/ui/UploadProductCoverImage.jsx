import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const UploadProductCoverImage = ({ formik }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    setPreview(previewUrl);
    formik.setFieldValue("coverImage", file);
  };

  const handleRemove = () => {
    setPreview(null);
    formik.setFieldValue("coverImage", null);
  };

  useEffect(() => {
    if (!formik.values.coverImage) {
      setPreview(null);
    }
  }, [formik.values.coverImage]);

  return (
    <div className="w-full relative">
      <label className="block font-medium mb-1">Upload Cover Image</label>

      <div className="relative w-full h-64">
        <label
          htmlFor="coverImage"
          className="relative flex items-center justify-center w-full h-full bg-(--secondary-bg) border-radius cursor-pointer overflow-hidden group"
        >
          {/* If image exists → show preview */}
          {preview ? (
            <>
              <img
                src={preview}
                alt="Cover Preview"
                className="w-full h-full object-cover"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  Change Image
                </span>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-body">
              <svg
                className="w-8 h-8 mb-4 secondary-text"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h3a3 3 0 0 0 0-6h-.025A5.5 5.5 0 0 0 7.207 9.02 4 4 0 1 0 7 17h2m3 4V10m0 0-2 2m2-2 2 2"
                />
              </svg>

              <p className="mb-2 text-sm secondary-text">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs secondary-text">PNG, JPG (MAX. 5 MB)</p>
            </div>
          )}

          <input
            id="coverImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>

        {/* Remove Button */}
        {preview && (
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
          >
            <IoClose size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadProductCoverImage;
