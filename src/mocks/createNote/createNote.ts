import { rest } from "msw";
import { baseURL } from "../../api/api";
import { API_URLS } from "../../api/api.constants";

const MOCK_URL = baseURL + API_URLS.note.allNotes;

export const createNote = {
  success: rest.post(MOCK_URL, (_, res, ctx) => res(ctx.json({
    title: 'test',
    description: 'test',
  }), ctx.status(201))),
  error: rest.post(MOCK_URL, (_, res, ctx) => res(ctx.json({
    error: "Couldn't create note"
  }), ctx.status(400))),

}