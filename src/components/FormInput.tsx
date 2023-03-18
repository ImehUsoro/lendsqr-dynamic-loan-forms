import { useFormik } from "formik";
import { OptionTypes } from "../types/PageTypes";
import { initialValues, setValidations } from "../utils/data";
import * as Yup from "yup";
import { useRecoilState } from "recoil";
import { submittedData } from "../atoms/pageAtoms";
import { useEffect } from "react";

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  options?: OptionTypes[];
  rows?: number;
  description: string;
  max?: number;
  min?: number;
}

const FormInput = ({
  id,
  min,
  max,
  type,
  rows,
  name,
  options,
  required,
  placeholder,
  description,
}: FormInputProps) => {
  const [formData, setFormData] = useRecoilState(submittedData);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: setValidations(max, min),
    onSubmit: (values) => {},
  });

  useEffect(() => {
    setFormData(formik.values);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    formik.handleChange(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    formik.handleChange(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSpecialInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    } else {
      formik.setFieldValue(id, e.target.files[0]);
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    }
  };

  let newPlaceholder = formik.values[id as keyof typeof formik.values]
    ? ""
    : placeholder;

  let defaultInputValue = formik.values[id as keyof typeof formik.values]
    ? formik.values[id as keyof typeof formik.values]
    : "";

  return (
    <div className="w-full">
      <div className="relative hover-trigger max-w-fit">
        <label htmlFor="" className="block mb-1 text-textColor">
          {name} {required ? <span className="text-red-500">*</span> : null}
        </label>
        {description && (
          <div
            className={`absolute bg-darkBlue text-white border border-grey-100 px-4 py-2 hover-target w-96 -top-4 left-40 rounded-md max-w-sm z-10`}
          >
            {description}
          </div>
        )}
      </div>

      {/* Input Fields */}

      <form action="">
        {type === "short_text" || type === "label" ? (
          <>
            <input
              type="text"
              name={id}
              onChange={handleInputChange}
              placeholder={newPlaceholder}
              defaultValue={defaultInputValue}
              onBlur={formik.handleBlur}
              className="input"
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.name_of_student &&
                formik.errors.name_of_student &&
                formik.errors.name_of_student}
            </p>
          </>
        ) : type === "long_text" ? (
          <>
            <textarea
              name={id}
              onChange={handleTextAreaChange}
              placeholder={newPlaceholder}
              defaultValue={defaultInputValue}
              onBlur={formik.handleBlur}
              rows={rows}
              className="input resize-none"
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.reason_for_loan &&
                formik.errors.reason_for_loan &&
                formik.errors.reason_for_loan}
            </p>
          </>
        ) : type === "date" ? (
          <>
            <input
              type="date"
              name={id}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              placeholder={placeholder}
              className="input"
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.date_of_birth &&
                formik.errors.date_of_birth &&
                formik.errors.date_of_birth}
            </p>
          </>
        ) : type === "time" ? (
          <input
            type="time"
            name={id}
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            placeholder={placeholder}
            className="input"
          />
        ) : type === "date_time" ? (
          <input
            type="datetime-local"
            name={id}
            placeholder={placeholder}
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            className="input"
          />
        ) : type === "number" ? (
          <>
            <input
              type="number"
              name={id}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              placeholder={newPlaceholder}
              defaultValue={defaultInputValue}
              className="input"
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.salary_of_dad &&
                formik.errors.salary_of_dad &&
                formik.errors.salary_of_dad}
            </p>
          </>
        ) : type === "integer" ? (
          <>
            <input
              type="number"
              name={id}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              placeholder={newPlaceholder}
              defaultValue={defaultInputValue}
              className="input"
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.number_of_siblins &&
                formik.errors.number_of_siblins &&
                formik.errors.number_of_siblins}
            </p>
          </>
        ) : type === "email" ? (
          <>
            <input
              type="email"
              name={id}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              placeholder={newPlaceholder}
              defaultValue={defaultInputValue}
              className="input"
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.email &&
                formik.errors.email &&
                formik.errors.email}
            </p>
          </>
        ) : type === "phone" ? (
          <>
            <input
              type="tel"
              name={id}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              placeholder={newPlaceholder}
              defaultValue={defaultInputValue}
              className="input"
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.phone_number &&
                formik.errors.phone_number &&
                formik.errors.phone_number}
            </p>
          </>
        ) : type === "checkbox" ? (
          <>
            <div className="flex flex-wrap gap-8">
              {options?.map((option) => (
                <div key={option.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name={id}
                    id={option.id}
                    value={option.id}
                    onChange={handleInputChange}
                    onBlur={formik.handleBlur}
                  />
                  <span className="text-textColor">{option.label}</span>
                </div>
              ))}
            </div>
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.food_options &&
                formik.errors.food_options &&
                formik.errors.food_options}
            </p>
          </>
        ) : type === "radio" ? (
          <div className="flex flex-wrap gap-8">
            {options?.map((option) => (
              <div key={option.id} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={id}
                  value={option.id}
                  onChange={handleInputChange}
                  onBlur={formik.handleBlur}
                />
                <span className="text-textColor">{option.label}</span>
              </div>
            ))}
          </div>
        ) : type === "dropdown" ? (
          <select
            name="document_options"
            onChange={handleSelectChange}
            onBlur={formik.handleBlur}
            value={formik.values.document_options}
            className="input"
          >
            {options?.map((option) => (
              <option key={option.id} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        ) : type === "upload" ? (
          <input
            type="file"
            name={id}
            alt=""
            placeholder={placeholder}
            onChange={handleSpecialInput}
            onBlur={formik.handleBlur}
            className="input"
          />
        ) : type === "audio" ? (
          <input
            type="file"
            name={id}
            alt=""
            placeholder={placeholder}
            onChange={handleSpecialInput}
            className="input"
          />
        ) : type === "image" ? (
          <input
            type="file"
            name={id}
            alt=""
            placeholder={placeholder}
            onChange={handleSpecialInput}
            className="input"
          />
        ) : type === "video" ? (
          <input
            type="file"
            name={id}
            alt=""
            id={id}
            placeholder={placeholder}
            onChange={handleSpecialInput}
            className="input"
          />
        ) : null}
      </form>
    </div>
  );
};

export default FormInput;
