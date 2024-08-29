import { backendService } from "../../api/api";
import { API_URLS } from "../../api/api.constants";
import { LoginRequestData, LoginResponse } from "./login.types";

const loginService = {
  login: async (data: LoginRequestData) => {
    const response = await backendService.post<LoginResponse>(API_URLS.login, data);
    return response.data;
  },
};

export default loginService;