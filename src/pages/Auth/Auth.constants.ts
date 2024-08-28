import * as yup from "yup";
import { confirmPasswordValidation, emailValidation, passwordValidation, usernameValidation } from "../../constants/validations";

export const constants = {
  login: "login",
  signup: "signup",
  loginPath: "/login",
  signupPath: "/signup",
}

export const signupSchema = yup.object().shape({
  email: emailValidation,
  username: usernameValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
})

export const loginSchema = yup.object().shape({
  username: usernameValidation,
  password: passwordValidation,
})

export const signupFormInitialValues = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
}

export const loginFormInitialValues = {
  username: '',
  password: '',
}