import { rest } from "msw";
import { baseURL } from "../../api/api";
import { API_URLS } from "../../api/api.constants";

const MOCK_URL = baseURL + API_URLS.signup;

export const postSignup = {
  success: rest.post(MOCK_URL, (_, res, ctx) => res(ctx.json({
    id: 'test',
    username: 'test',
    email: 'test@test.com',
    notes: [],
    folders: []
  }), ctx.status(201))),
  error: rest.post(MOCK_URL, (_, res, ctx) => res(ctx.json({
    error: "There's already an account with this email"
  }), ctx.status(400)))
}