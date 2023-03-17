import { OptionTypes } from "../types/PageTyes";

interface FormInputProps {
  name: string;
  type: string;
  required?: boolean;
  options?: OptionTypes[];
  rows?: number;
}

const FormInput = ({ type, name, required, options, rows }: FormInputProps) => {
  console.log(type);
  //   console.log(options);
  return (
    <div className="w-[80%]">
      <label htmlFor="" className="block mb-1 text-textColor">
        {name} {required ? <span className="text-red-500">*</span> : null}
      </label>
      {type === "short_text" ? (
        <input
          type="text"
          placeholder={name}
          defaultValue=""
          className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
        />
      ) : type === "long_text" ? (
        <textarea
          rows={rows}
          placeholder={name}
          defaultValue=""
          className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor resize-none"
        />
      ) : type === "date" ? (
        <input
          type="date"
          placeholder={name}
          defaultValue=""
          className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
        />
      ) : type === "time" ? (
        <input
          type="time"
          placeholder={name}
          defaultValue=""
          className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
        />
      ) : type === "date_time" ? (
        <input
          type="datetime-local"
          placeholder={name}
          defaultValue=""
          className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
        />
      ) : type === "date_time" ? (
        <input
          type="datetime-local"
          placeholder={name}
          defaultValue=""
          className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
        />
      ) : type === "number" || type === "integer" ? (
        <input
          type="number"
          placeholder={name}
          defaultValue=""
          className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
        />
      ) : type === "email" ? (
        <input
          type="email"
          placeholder={name}
          defaultValue=""
          className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
        />
      ) : type === "phone" ? (
        <input
          type="tel"
          placeholder={name}
          defaultValue=""
          className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
        />
      ) : type === "checkbox" ? (
        <div className="flex flex-wrap gap-8">
          {options?.map((option) => (
            <div key={option.id} className="flex items-center gap-2">
              <input type="checkbox" defaultValue="" className="" />
              <span className="text-textColor">{option.label}</span>
            </div>
          ))}
        </div>
      ) : type === "radio" ? (
        <div className="flex flex-wrap gap-8">
          {options?.map((option) => (
            <div key={option.id} className="flex items-center gap-2">
              <input type="radio" name={name} defaultValue="" className="" />
              <span className="text-textColor">{option.label}</span>
            </div>
          ))}
        </div>
      ) : type === "select" ? (
        <select className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor">
          <option value="">Active</option>
          <option value="">Inactive</option>
        </select>
      ) : null}
    </div>
  );
};

export default FormInput;
