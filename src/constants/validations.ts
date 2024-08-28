import * as yup from "yup";

export const emailValidation = yup
  .string()
  .email("Invalid email address")
  .required("This field is required")

export const usernameValidation = yup
  .string()
  .required("This field is required")

export const passwordValidation = yup
  .string()
  .required("This field is required")
  .min(8, "Your password must be at least 8 characters");

export const confirmPasswordValidation = yup
  .string()
  .required("This field is required")
  .oneOf([yup.ref("password"), null], "Passwords do not match");

export const noteTitleValidation = yup
  .string()
  .required("Your note should have a title")

export const noteDescriptionValidation = yup
  .string()

export const noteFolderValidation = yup
  .string()
  .nullable(true)

export const noteCodeValidation = yup
  .string()

export const noteEntriesValidation = yup
  .array()
  .of(
    yup.object().shape({
      lineNumbers: yup.array().of(yup.number()),
      content: yup.string()
    })
  )

export const folderTitleValidation = yup
  .string()

export const folderDescriptionValidation = yup
  .string()