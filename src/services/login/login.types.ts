export type LoginRequestData = {
  username: string;
  password: string;
}

export type LoginResponse = {
  username: string;
  email: string;
  token: string;
}