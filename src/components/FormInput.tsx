interface FormInputProps {
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
  format: string;
}

const FormInput = ({
  type,
  placeholder,
  name,
  required,
  format,
}: FormInputProps) => {
  return (
    <div className="w-[48%]">
      <label htmlFor="" className="block mb-1 text-textColor">
        {name} {required ? <span className="text-red-500">*</span> : null}
      </label>
      {format === "input" ? (
        <input
          type={type}
          placeholder={placeholder}
          defaultValue=""
          className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
        />
      ) : format === "select" ? (
        <select className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor">
          <option value="">Active</option>
          <option value="">Inactive</option>
        </select>
      ) : null}
    </div>
  );
};

export default FormInput;
