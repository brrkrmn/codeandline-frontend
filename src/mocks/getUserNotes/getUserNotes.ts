import { rest } from "msw";
import { baseURL } from "../../api/api";
import { API_URLS } from "../../api/api.constants";

const MOCK_URL = baseURL + API_URLS.note.allNotes;

export const getUserNotes = {
  success: rest.get(MOCK_URL, (_, res, ctx) => res(ctx.json([
    { title: 'test', description: 'test' }
  ]), ctx.status(200))),
  error: rest.get(MOCK_URL, (_, res, ctx) => res(ctx.json({
     error: "Unauthorized"
  }), ctx.status(401))),
}