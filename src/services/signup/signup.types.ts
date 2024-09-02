import { User } from "../../types";

export type SignupRequestData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type SignupResponse = User