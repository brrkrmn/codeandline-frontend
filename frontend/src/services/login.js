import axios from "axios";

const baseUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/login'
    : 'https://www.codeandline.com/api/login';

const loginService = {
  login: async (user) => {
    const response = await axios.post(baseUrl, user);
    return response.data;
  },
};

export default loginService;