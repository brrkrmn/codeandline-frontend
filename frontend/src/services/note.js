import axios from 'axios';
import { config } from '../utils/token';

const baseUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/notes'
    : '/api/notes';

const noteService = {
  getNotes: async () => {
    const response = await axios.get(baseUrl, config)
    return response.data
  },
  create: async (newNote) => {
    const response = await axios.post(baseUrl, newNote, config)
    return response.data
  }
}

export default noteService;