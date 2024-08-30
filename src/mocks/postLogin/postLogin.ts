import { rest } from "msw";
import { baseURL } from "../../api/api";
import { API_URLS } from "../../api/api.constants";

const MOCK_URL = baseURL + API_URLS.login;

export const postLogin = {
  success: rest.post(MOCK_URL, (_, res, ctx) => res(ctx.json({
    username: "test",
    email: "test@test.com",
    token: "testToken"
  }), ctx.status(200))),
  error: rest.post(MOCK_URL, (_, res, ctx) => res(ctx.json({
    error: 'Invalid username or password'
  }), ctx.status(401))),
}