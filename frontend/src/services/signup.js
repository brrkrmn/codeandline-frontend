import axios from "axios";

const baseUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/signup'
    : '/api/signup';

const signupService = {
  signup: async (user) => {
    try {
      const response = await axios.post(baseUrl, user);
      return response.data
    } catch (error) {
      return error.response?.data
    }
  }
}

export default signupService;