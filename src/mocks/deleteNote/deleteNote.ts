import { rest } from "msw";
import { baseURL } from "../../api/api";
import { API_URLS } from "../../api/api.constants";

const MOCK_URL = baseURL + API_URLS.note.byId(':id');

export const deleteNote = {
  success: rest.delete(MOCK_URL, (_, res, ctx) => res(ctx.status(204))),
  error: rest.delete(MOCK_URL, (_, res, ctx) => res(ctx.json({
    error: "Couldn't delete note"
  }), ctx.status(401))),
}