import * as yup from "yup";
import { confirmPasswordValidation, emailValidation, passwordValidation } from "../../constants/validations";

export const constants = {
  login: "login",
  signup: "signup",
  loginPath: "/login",
  signupPath: "/signup",
}

export const signupSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
})

export const loginSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
})

export const signupFormInitialValues = {
  email: '',
  password: '',
  confirmPassword: '',
}

export const loginFormInitialValues = {
  email: '',
  password: '',
}