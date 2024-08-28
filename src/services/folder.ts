import axios from "axios";
import { config } from "../utils/token";

const baseUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/folders'
    : 'https://codeandline-backend.vercel.app/api/folders';

const folderService = {
  getUserFolders: async () => {
    const response = await axios.get(baseUrl, config)
    return response.data
  },
  getFolder: async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`, config)
    return response.data
  },
  createFolder: async (folder) => {
    const response = await axios.post(baseUrl, folder, config)
    return response.data
  },
  deleteFolder: async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
  },
  updateFolder: async (id, folder) => {
    const response = await axios.put(`${baseUrl}/${id}`, folder, config)
    return response.data
  }
}

export default folderService;