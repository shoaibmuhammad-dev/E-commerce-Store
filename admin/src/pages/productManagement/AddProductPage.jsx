import { Link } from "react-router-dom";
import AddProductForm from "./AddProductForm";
import { FiArrowLeft } from "react-icons/fi";

const AddProductPage = () => {
  return (
    <>
      <div className="">
        <Link
          to={"/products"}
          className="bg-white px-4 py-3 border-radius text-sm inline-flex items-center gap-1 text-gray-600 font-medium"
        >
          <FiArrowLeft size={18} />
          Back
        </Link>
      </div>
      <main className="w-full bg-white border-radius p-6 mt-4">
        <div className="w-full flex items-center justify-between gap-5">
          <h1 className="text-black page-heading">Add Product</h1>
        </div>

        <AddProductForm />
      </main>
    </>
  );
};

export default AddProductPage;
