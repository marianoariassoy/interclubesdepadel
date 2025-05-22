import { UseFormRegisterReturn } from "react-hook-form";

interface Input {
  type: string;
  title: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const Input = ({ type, title, placeholder, register }: Input) => {
  return (
    <div className="w-full">
      <label className="block mb-2">
        <span className="text-primary text-sm font-medium">{title}</span>
      </label>
      <input
        type={type}
        className="w-full h-14 border border-primary rounded-lg bg-transparent px-4 text-sm focus:outline-none focus:ring-0 text-primary mb-2"
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default Input;
