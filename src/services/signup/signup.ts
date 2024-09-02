import { backendService } from "../../api/api";
import { API_URLS } from "../../api/api.constants";
import { SignupRequestData, SignupResponse } from "./signup.types";

const signupService = {
  signup: async (data: SignupRequestData) => {
    const response = await backendService.post<SignupResponse>(API_URLS.signup, data);
    return response?.data
  }
}

export default signupService;