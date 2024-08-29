import { User } from "../../types";

export type SignupRequestData = {
  username: string;
  email: string;
  password: string;
}

export type SignupResponse = User