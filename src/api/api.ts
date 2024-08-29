import axios from "axios";

const baseURL =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  ? 'http://localhost:3001/api'
  : 'https://codeandline-backend.vercel.app/api';


export const backendService = axios.create({
  baseURL: baseURL
});