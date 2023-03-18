import { useFormik } from "formik";
import { OptionTypes } from "../types/PageTypes";
import { values } from "../utils/data";
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
    initialValues: {
      name_of_student: values.name_of_student,
      number_of_siblins: values.number_of_siblins,
      salary_of_dad: values.salary_of_dad,
      phone_number: values.phone_number,
      email: values.email,
      reason_for_loan: values.reason_for_loan,
      food_options: "",
      document_options: "International Passport",
      date_of_birth: "",
      time_of_day: "",
      drink_options: "",
      resumption_date: "",
      identity_document: "",
      audio_attestation: "",
      student_selfie: "",
      video_attestation: "",
    },
    validationSchema: Yup.object({
      name_of_student: Yup.string().required("Name is required"),
      number_of_siblins: Yup.number()
        .required("Number of siblings are required")
        .max(max || 10, "Maximum of 10 siblings")
        .min(min || 0),
      salary_of_dad: Yup.number()
        .required("Salary is required")
        .max(max || 999999999, "Maximum of ₦1,000,000")
        .min(min || 0),
      reason_for_loan: Yup.string().required("Reason is required"),
      date_of_birth: Yup.string().required("Date of birth is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone_number: Yup.string()
        .matches(
          /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
          "Invalid phone number"
        )
        .required("Phone Number is required"),
      food_options: Yup.array().min(1, "Select one food option"),
    }),

    onSubmit: (values) => {
      // setFormData(values);
      // setLoading(true);
      // signIn(values, navigate, setLoading);
    },
  });

  useEffect(() => {
    setFormData(formik.values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    formik.values.date_of_birth,
    formik.values.document_options,
    formik.values.email,
    formik.values.food_options,
    formik.values.name_of_student,
    formik.values.number_of_siblins,
    formik.values.phone_number,
    formik.values.reason_for_loan,
    formik.values.salary_of_dad,
    formik.values.time_of_day,
    formik.values.drink_options,
    formik.values.resumption_date,
    formik.values.identity_document,
    formik.values.audio_attestation,
    formik.values.student_selfie,
    formik.values.video_attestation,
  ]);

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
              onChange={formik.handleChange}
              placeholder={formik.values.name_of_student ? "" : placeholder}
              defaultValue={
                id === "name_of_student" && formik.values.name_of_student
                  ? formik.values.name_of_student
                  : ""
              }
              onBlur={formik.handleBlur}
              className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
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
              onChange={formik.handleChange}
              placeholder={formik.values.reason_for_loan ? "" : placeholder}
              defaultValue={
                id === "reason_for_loan" && formik.values.reason_for_loan
                  ? formik.values.reason_for_loan
                  : ""
              }
              onBlur={formik.handleBlur}
              rows={rows}
              className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor resize-none"
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={placeholder}
              defaultValue=""
              className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={placeholder}
            defaultValue=""
            className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
          />
        ) : type === "date_time" ? (
          <input
            type="datetime-local"
            name={id}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            defaultValue=""
            className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
          />
        ) : type === "number" ? (
          <>
            <input
              type="number"
              name={id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={
                formik.values.salary_of_dad
                  ? formik.values.salary_of_dad.toFixed()
                  : placeholder
              }
              defaultValue={
                formik.values.salary_of_dad ? formik.values.salary_of_dad : ""
              }
              className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={
                formik.values.number_of_siblins
                  ? formik.values.number_of_siblins.toFixed()
                  : placeholder
              }
              defaultValue={
                formik.values.number_of_siblins
                  ? formik.values.number_of_siblins
                  : ""
              }
              className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={formik.values.email ? "" : placeholder}
              defaultValue={
                id === "email" && formik.values.email ? formik.values.email : ""
              }
              className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={formik.values.phone_number ? "" : placeholder}
              defaultValue={
                id === "phone_number" && formik.values.phone_number
                  ? formik.values.phone_number
                  : ""
              }
              className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
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
                    onChange={formik.handleChange}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span className="text-textColor">{option.label}</span>
              </div>
            ))}
          </div>
        ) : type === "dropdown" ? (
          <select
            name="document_options"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.document_options}
            className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
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
            defaultValue=""
            onChange={(event) => {
              if (!event.target.files) {
                return;
              } else {
                formik.setFieldValue(
                  "identity_document",
                  event.target.files[0]
                );
              }
            }}
            onBlur={formik.handleBlur}
            className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
          />
        ) : type === "audio" ? (
          <input
            type="file"
            name={id}
            alt=""
            placeholder={placeholder}
            defaultValue=""
            onChange={(event) => {
              if (!event.target.files) {
                return;
              } else {
                formik.setFieldValue(
                  "audio_attestation",
                  event.target.files[0]
                );
              }
            }}
            className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
          />
        ) : type === "image" ? (
          <input
            type="file"
            name={id}
            alt=""
            placeholder={placeholder}
            defaultValue=""
            onChange={(event) => {
              if (!event.target.files) {
                return;
              } else {
                formik.setFieldValue("student_selfie", event.target.files[0]);
              }
            }}
            className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
          />
        ) : type === "video" ? (
          <input
            type="file"
            name={id}
            alt=""
            placeholder={placeholder}
            defaultValue=""
            onChange={(event) => {
              if (!event.target.files) {
                // return;
              } else {
                formik.setFieldValue(
                  "video_attestation",
                  event.target.files[0]
                );
              }
            }}
            className="border-2 w-full border-gray-200 rounded-md p-2 placeholder:text-textColor focus:outline-none focus:border-green text-textColor"
          />
        ) : null}
      </form>
    </div>
  );
};

export default FormInput;
