import { UseFormRegisterReturn } from "react-hook-form";

interface Category {
  value: string;
  label: string;
}

interface Input {
  options: Category[];
  register: UseFormRegisterReturn;
  title: string;
}

const Input = ({ options, register, title }: Input) => {
  return (
    <div>
      <label className="block mb-2">
        <span className="text-primary text-sm font-semibold">{title}</span>
      </label>
      <div className="relative">
        <select
          className="w-full h-14 border border-primary rounded-lg bg-transparent px-4 text-sm focus:outline-none focus:ring-0  mb-2 appearance-none"
          {...register}
        >
          <option value="" disabled>
            Selecciona
          </option>
          {options.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Input;
