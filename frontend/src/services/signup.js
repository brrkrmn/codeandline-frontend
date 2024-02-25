import axios from "axios";

const baseUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/signup'
    : '/api/signup';

const signupService = {
  signup: async (user) => {
    const response = await axios.post(baseUrl, user);
    return response.data;
  }
}

export default signupService;