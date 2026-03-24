import ButtonLoader from "./ButtonLoader";

const Button = ({ type = "submit", title, isLoading }) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      className="bg-(--primary-color) text-white h-11 text-center w-full font-medium text-base outline-none cursor-pointer relative border-radius"
    >
      {isLoading ? <ButtonLoader /> : title}
    </button>
  );
};

export default Button;
