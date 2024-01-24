import axios from "axios";
const baseUrl = 'http://localhost:3001/';

const loginService = {
  login: async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  },
};

export default loginService;