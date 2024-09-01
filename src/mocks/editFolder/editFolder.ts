import { rest } from "msw";
import { baseURL } from "../../api/api";
import { API_URLS } from "../../api/api.constants";

const MOCK_URL = baseURL + API_URLS.folder.byId(':id')

export const editFolder = {
  success: rest.put(MOCK_URL, (_, res, ctx) => res(ctx.json({
    title: 'test',
    description: 'test',
  }), ctx.status(200))),
  error: rest.put(MOCK_URL, (_, res, ctx) => res(ctx.json({
    error: "Couldn't edit folder"
  }), ctx.status(400))),
}