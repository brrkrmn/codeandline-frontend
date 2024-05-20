import axios from "axios";

const baseUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/login'
    : 'https://codeandline-backend.vercel.app/api/login';

const loginService = {
  login: async (user) => {
    const response = await axios.post(baseUrl, user);
    return response.data;
  },
};

export default loginService;