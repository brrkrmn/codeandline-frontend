import * as yup from "yup";

export const emailValidation = yup
  .string()
  .email("Invalid email address")
  .required("This field is required")

export const passwordValidation = yup
  .string()
  .required("This field is required")
  .min(8, "Your password must be at least 8 characters");

export const confirmPasswordValidation = yup
  .string()
  .required("This field is required")
  .oneOf([yup.ref("password"), null], "Passwords do not match");