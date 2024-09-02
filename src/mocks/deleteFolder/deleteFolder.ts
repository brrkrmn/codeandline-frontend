import { rest } from "msw";
import { baseURL } from "../../api/api";
import { API_URLS } from "../../api/api.constants";

const MOCK_URL = baseURL + API_URLS.folder.byId(':id')

export const deleteFolder = {
  success: rest.delete(MOCK_URL, (_, res, ctx) => res(ctx.status(204))),
  error: rest.delete(MOCK_URL, (_, res, ctx) => res(ctx.json({
    error: "Couldn't delete folder"
  }), ctx.status(401))),
}