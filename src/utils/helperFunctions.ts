import * as Yup from "yup";

export const setValidations = (
  max: number | undefined,
  min: number | undefined
) => {
  let validations = Yup.object({
    name_of_student: Yup.string().required("Name is required"),
    number_of_siblins: Yup.number()
      .required("Number of siblings are required")
      .max(max || 10, "Maximum of 10 siblings")
      .min(min || 0),
    salary_of_dad: Yup.number()
      .required("Salary is required")
      .max(max || 999999999, "Maximum of ₦1,000,000,000")
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
    identity_document: Yup.object({
      size: Yup.number().max(100).required("File is required"),
      // type: Yup.string().matches().required("File is required"),
    }),
  });
  return validations;
};
